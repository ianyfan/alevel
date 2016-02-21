#!venv/bin/python
import os
import markdown

md = markdown.Markdown(output_format='html5',
    extensions=['markdown.extensions.tables', 'markdown.extensions.nl2br'])

def make_nav(node):
    if 'href' in node:
        indent = ' '*(2*len(node['href']) + 6)

    if 'children' in node:
        children = '\n'.join(map(lambda item: make_nav(item[1]),
                                 sorted(node['children'].items())))

        return ('{0}<li>\n{0}  <a href="#{1}">{1} {2}</a>\n{0}  <ol>\n{3}\n'
                '{0}  </ol>\n{0}</li>').format(
                   indent, node['href'], node['heading'], children
               ) if 'href' in node else children
    else:
        return '{0}<li><a href="#{1}">{1} {2}</a></li>'.format(
                   indent, node['href'], node['heading'])

def make_html(node):
    if 'children' in node:
        html = '\n'.join(map(lambda item: make_html(item[1]),
                             sorted(node['children'].items())))
    else:
        try:
            html = '''      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Exposition</th>
          </tr>
        </thead>
        <tbody>
{}
        </tbody>
      </table>'''.format('\n'.join(
          '''          <tr>
            <td>
{}
            </td>
            <td>{}</td>'''.format(md.convert(spec), md.convert(node['exposition'][n]) if 'exposition' in node and n in node['exposition'] else '\n            ')
                for n, spec in node['specification'].items()
            ))
        except:
            html = ''

    try:
        return '      <h{0} id="{1}">{1} {2}</h{0}>\n{3}'.format(
                (len(node['href']) + 1)//2, node['href'], node['heading'], html)
    except:
        return html

subjects = ('electronics', 'physics')
data = {}
navs = {}
for subject in subjects:
    sections = data[subject] = {}
    with open(subject + '/headings.md') as f:
        for line in f:
            section, heading = line.strip().partition(' ')[0::2]
            *parents, current = map(int, section.split('.'))
            node = sections
            for parent in parents:
                node = node['children'][parent]
            if 'children' not in node:
                node['children'] = {}
            node['children'][current] = {'heading': heading.lstrip(),
                                         'href': section}

    navs[subject] = make_nav(sections)

    for document in ('specification', 'exposition'):
        file_name = subject + '/' + document + '.md'
        with open(file_name) as f:
            in_section = False
            for line_no, line in enumerate(f, 1):
                if not in_section:
                    try:
                        parents = map(int, line.strip().split('.'))
                        node = sections
                        for parent in parents:
                            node = node['children'][parent]
                    except KeyError:
                        pass
                    except:
                        raise Exception('Error in ' + file_name + ', line ' + str(line_no))
                    else:
                        markdown = node[document] = {}
                        in_section = True
                elif line == '\n':
                    in_section = False
                elif line == '\\\n':
                    markdown[last] += '\n'
                else:
                    number, _, line = line.partition(' ')
                    if number == '\\':
                        markdown[last] += line
                    else:
                        last = int(number)
                        markdown[last] = line

for subject in subjects:
    os.makedirs('alevel/' + subject, exist_ok=True)
    with open('alevel/' + subject + '/index.html', 'w+') as f:
        f.write('''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="/alevel/style.css" rel="stylesheet">
    <script src="/alevel/script.js" async></script>
    <script type="text/x-mathjax-config">
        MathJax.Ajax.config.path["Contrib"] = "//cdn.mathjax.org/mathjax/contrib";
        MathJax.Hub.Config({{
            extensions: ["[Contrib]/siunitx/siunitx.js"],
        }});
    </script>
    <script src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML" async></script>
  </head>
  <body>
    <nav class="{}">
      <ul>
{}
      </ul>
{}
    </nav>
    <section>
{}
    </section>
    <footer>
    </footer>
  </body>
</html>'''.format(
    subject,
    '\n'.join(['        <li><a href="/alevel/{}">{}</a></li>'.format(s, s.title()) for s in subjects]),
    '\n'.join(['      <ol id="{}">\n{}\n      </ol>'.format(s, navs[s]) for s in subjects]),
    make_html(data[subject])
)
)
