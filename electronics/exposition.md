1.1.1
1 Switch with a pull-up resistor: !\\(\\)() generates a high signal when the switch is open and a low signal when the switch is closed
\ Switch with a pull-down resistor generates a low signal when the switch is open and a low signal when the switch is closed
5 In practice, components may be able to tolerate a little above the maximum ratings, but the limits should still be observed
7 | Prefix |   Magnitude    |  Name  |
\ |:------:|:--------------:|:------:|
\ |   G    |   \\(10^9\\)   |  Giga- |
\ |   M    |   \\(10^6\\)   |  Mega- |
\ |   k    |   \\(10^3\\)   |  Kilo- |
\ |   -    |   \\(10^0\\)   |      - |
\ |   m    | \\(10^{-3}\\)  | Milli- |
\ |   μ    | \\(10^{-6}\\)  | Micro- |
\ |   n    | \\(10^{-9}\\)  |  Nano- |
\ |   p    | \\(10^{-12}\\) |  Pico- |

1.1.2
1 Ideal: ![]()
\ Practice: ![]()
2 AND:
\
\ | A | B | Q |
\ |:-:|:-:|:-:|
\ | 0 | 0 | 0 |
\ | 0 | 1 | 0 |
\ | 1 | 0 | 0 |
\ | 1 | 1 | 1 |
\
\ EOR (XOR):
\
\ | A | B | Q |
\ |:-:|:-:|:-:|
\ | 0 | 0 | 0 |
\ | 0 | 1 | 1 |
\ | 1 | 0 | 1 |
\ | 1 | 1 | 0 |
\
\ NAND:
\
\ | A | B | Q |
\ |:-:|:-:|:-:|
\ | 0 | 0 | 1 |
\ | 0 | 1 | 1 |
\ | 1 | 0 | 1 |
\ | 1 | 1 | 0 |
\
\ NOR:
\
\ | A | B | Q |
\ |:-:|:-:|:-:|
\ | 0 | 0 | 1 |
\ | 0 | 1 | 0 |
\ | 1 | 0 | 0 |
\ | 1 | 1 | 0 |
\
\ OR:
\
\ | A | B | Q |
\ |:-:|:-:|:-:|
\ | 0 | 0 | 0 |
\ | 0 | 1 | 1 |
\ | 1 | 0 | 1 |
\ | 1 | 1 | 1 |
3 If LED is on, signal is high
\ Resistor limits current
4 Ideal: ![]()
\ Practice: ![]()

1.2.1
1 ![]()
2 ![]()
3 \\(\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}\\)
4 \\(V_{out} = \frac{R_1}{R_1 + R_2}V_{in}\\)

1.2.2
3 The diode rectifies the \\(\SI{-13}{\volt}\\) to \\(\SI{0}{\volt}\\)
\ The resistors form a potential divider that converts the \\(\SI{+13}{\volt}\\) into \\(\SI{+5}{\volt}\\)
4 !\\(\\)()
5 A zener diode placed in reverse bias in series with a resistor can provide a voltage equal to its breakdown voltage that is invariant to the supply voltage

1.2.3
1 Charging: \\(V = V_0(1 - e^{-\frac{t}{RC}})\\)
\ Discharging: \\(V = V_0e^{-\frac{t}{RC}}\\)
2 \\(\tau\\) is the time required for the voltage across the capacitor to fall to \\(\frac{1}{e}\\) of the original value
\ \\(R\\) is the resistance in Ohms
\ \\(C\\) is the capacitance in Farads
3 \\(\frac{V_0}{2} = V_0e^{-\frac{t}{\tau}} \implies t = -\tau\ln\frac{1}{2} = \tau\ln 2 = 0.69\ldots\tau \approx 0.7\tau\\)
4 Passing a signal to a NOT gate through a capacitor delays the switching time until the capacitor charges to half the supply voltage

1.3.1
1 Wiring an RC network as a potential divider causes an edge to be transformed to the input voltage, before falling to 0 as the capacitor charges, resulting in a spike
2 A diode connected to the output from 0 suppresses the negative spike, clamping the voltage to \\(\SI{0.7}{\volt}\\), and shortening the time constant
3 The input & output of the monostable is initially high, 
\ On the falling edge of the input, the RC network goes high, causing the output to go low
\ The feedback of the output back to the first monostable keeps the RC network high until the capacitor charges halfway, causing the output to return hig
4 The clamping diodes prevent the inputs from going higher than \\(\SI{0.7}{\volt}\\) outside the limits

1.3.2
1 The trip point when the gate is low is higher than when it is high
2 When the output of the Schmitt trigger is high, the capacitor charges through the resistor until it reaches the upper trip point, when the Schmitt trigger goes low, causing the capacitor to discharge through the resistor until it reaches the the lower trip point
4 \\(T\\) is the time period
5 Drivers provide the necessary current to drive a loudspeaker that logic gates are unable to provide

1.4.1
2 \\(\operatorname{NOT} A = \overline A\\)
\ \\(A \operatorname{AND} B = A\cdot B\\)
\ \\(A \operatorname{OR} B = A + B\\)
6 \\(A \operatorname{AND} B = (A \operatorname{NAND} B) \operatorname{NAND} (A \operatorname{AND} B)\\)
\ \\(A \operatorname{OR} B = ((A \operatorname{NAND} A) \operatorname{NAND} (B \operatorname{NAND} B)) \operatorname{NAND} ((A \operatorname{NAND} A) \operatorname{NAND} (B \operatorname{NAND} B))\\)
\ \\(\operatorname{NOT} A = A \operatorname{NAND} A\\)

2.1.1
1 A bistable latches its output, until it is "set" high or "reset" low
2 
4 A latch stores the information in its data input when the enable input is high, or can be set or reset
5 The data input demultiplexes the enable input, sending it to the set or reset input depending on whether the data is high or low
6 A rising-edge triggered D flip-flop only copies the data to the output on the rising edge of the clock input
7 The master latch stores the data input while the clock input is low
\ When the clock input goes high, the master latch locks its output, and the slave latch is enabled, causing the data input at the time of the rising edge to be stored regardless of whether it changes any further
8 The clock inputs are connected so that information can be stored simultaneously

2.2.1
1 The coupling capacitor removes d.c. bias
3 The gain is effectively infinite, causing the output to saturate unless the difference in voltage between the inputs is effectively 0
4 \\(V_{out} = A(V_+ - V_-) = A(V_+ - V_{out})\\)
\ Re-arranging gives \\(V_{out} = \frac{A}{A + 1}V_+\\)
\ A is so large that the 1 is negligible, so \\(V_{out} = V_+\\)
\ The pull-down resistor allows a safe path for current leak to 0
6 The output of an op-amp can source more current

2.2.2
1 The output does not saturate, so \\(V_- = V_+\\), and from the potential divider formula:
\ \\(V_{out} = \frac{R_f + R_d}{R_d}V_- = V_+(1 + \frac{R_f}{R_d})\\) so \\(G = 1 + \frac{R_f}{R_d}\\)
2 The output does not saturate, so the difference in voltage of the inputs is effectively 0
\ Since the non-inverting input is tied to ground, this means that there is a virtual earth at the inverting input
\ \\(V_{out} = \frac{-R_f}{R_{in}}V_- = -\frac{R_f}{R_{in}}V_{in}\\) so \\(G = -\frac{R_f}{R_{in}}\\)
4 Equating current gives \\(-\frac{V_{out}}{R_f} = \sum_{i=1}^n\frac{V_i}{R_i}\\)

2.3.1
1 D switches state on every rising clock, causing it to emulate a one-bit counter
2 Connecting the inverted output of each flip-flop in an array to the clock input of the next one causes the array to emulate a binary ripple up-counter
3 AND gates processing the high bits of n causes its output to go high upon reaching n, which can then be connected to the set & reset inputs of the respective flip-flops that will set the counter to m

2.3.2
2 The frequency division of an oscillating signal can be achieved by connecting the signal to a binary counter that counts up to the desired number, flips the state of the output and resets

2.4.1
1 Signal source -> Pre-amplifier -> Tone controls -> Volume control -> Voltage amplifier -> Power amplifier -> Loudspeaker
2 The output impedance should be lower than the following input impedance to minimise signal loss
3 The position of the wiper on the potentiometer determines how much of the signal passes through to the voltage amplifier

2.4.2
2 The break frequency is the frequency at which half the input power is outputted, where the impedance of the capacitor is equal to the resistance of the resistor
3 Passive filters cannot boost signals, only cut
4 Treble-cut filters are based on an inverting amplifier with a capacitor wired in parallel with the feedback resistor
\ Bass-cut filters are based on an inverting amplifier with a capacitor wired in series with the input resistor
\ A bandpass filter includes both capacitors

4.1.1

4.2.1
1 The data bus controls the data that is read from or written to memory
\ The address bus controls where the data is stored in memory
\ The control bus controls how the module functions
2 The number of data lines is equal to the word length
3 The number of different locations in the memory module is equal to 2 to the power of the number of address lines
4 The lines are normally high, and must be taken low to perform their function
5 Writing: place location address on address bus -> place data on data bus -> pull chip-enable low -> pulse write-enable low
\ Reading: place location address on address bus -> wait for location to be accessed -> pull chip-enable low -> pulse read-enable low

4.2.2
1 
