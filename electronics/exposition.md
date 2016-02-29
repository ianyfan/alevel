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
4 Equating current gives \\[-\frac{V_{out}}{R_f} = \sum_{i=1}^n\frac{V_i}{R_i}\\]

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

5.1.1
4 Splitting the RGB signals means that only a third of the total data is sent down each signal, so the bandwidth is a third of what is would otherwise need to be
6 The bitrate is the number of bits that must be sent down the cable in a second, and is equal to \\(\text{pixels per frame} \cdot \text{frame rate}\\)
\ The bandwidth is half the bitrate
7 The number of intensity levels is \\(2^\text{word length}\\)
8 The bitrate is equal to \\(\text{bits per pixel} \cdot \text{pixels per frame} \cdot \text{frame rate}\\)
9 This is since maximum bandwidth occurs when the bitstream alternates between 0 & 1, so each cycle is 2 bits, so the bandwidth is half the bitrate
10 Compression reduces the bandwidth

5.2.1
1 The frequency of the carrier is normally much higher than the frequency of the signal, by at least a magnitude
2 With the signal voltage controlling the gain of the amplifier, a higher signal causes a higher amplitude in the carrier, and a lower signal causes a lower amplitude in the carrier (or vice versa, depending on the configuration of the amplifier)
3 ![](/alevel/img/am_voltage_time.svg)
\ ![](/alevel/img/amplitude_frequency.svg)
4 ![](/alevel/img/am_demodulation.svg)
\ The diode rectifier removes the negative signal
\ The low pass filter removes the carrier frequency, since it is much higher than the signal frequency
5 The bandwidth is the distance from the lowest sideband to the highest sideband
\ Each sideband is a distance equal to its frequency away from the carrier frequency, so the most extreme sideband is a distance equal to the maximum signal frequency away
\ Therefore, the bandwidth is equal to twice the maximum signal frequency

5.2.2
1 The frequency of the carrier is normally much higher than the frequency of the signal, by at least a magnitude
2 With the signal voltage controlling the frequency of the oscillator, a higher signal causes a higher frequency in the carrier, and a lower signal causes a lower frequency in the carrier (or vice versa, depending on the configuration of the oscillator)
3 ![](/alevel/img/fm_demodulation.svg)
\ The monostable produces a short pulse for each cycle of the recieved signal
5 This is a rule of thumb

5.2.3
1 A pulse-width modulated carrier consists of a fixed-length high-low cycle with a variable-length high pulse during it
\ The mark-space ratio is the ratio of the period of the high pulse to the period of the cycle
2 Assuming the triangle wave generator is fast enough that the signal voltage can be assumed to be constant during each cycle, the length of the cycle is the time period of the triangle
\ The length of the pulse is determined by the period of time the voltage of the triangle wave is higher (or lower, depending on the configuration of the comparator) than the voltage of the signal, and is therefore has a linear relationship with the voltage
3 ![](/alevel/img/ramp_generator.svg)
\ An op-amp ramp generator has a similar design to an inverting amplifier
\ Since the output is not saturated and the non-inverting input is grounded, the difference between the two inputs is effectively zero and there is a virtual ground at the inverting input, so \\(V_- = V_+ = \SI{0}{\volt}\\)
\ Since the op-amp draws no current, the current across the resistor is equal to the current acress the capacitor
\ The output voltage is:
\ \\[\begin{alignat}{2}
\ & Q_C && = CV_C
\ \\\ \implies & \int I_C \mathrm{d}t && = C(V_- - V_{out})
\ \\\ \implies & \int I_R \mathrm{d}t && = -CV_{out}
\ \\\ \implies & V_{out} && = -\frac{1}{C}\int \frac{V_R}{R} \mathrm{d}t
\ \\\ & && = -\frac{1}{RC}\int V_{in} - V_- \mathrm{d}t
\ \\\ & && = -\frac{1}{RC}\int V_{in} \mathrm{d}t
\ \\\ & && = -\frac{1}{RC}V_{in}t
\ \end{alignat}\\]
\ ![](/alevel/img/schmitt_trigger.svg)
\ A non-inverting Schmitt trigger has a similar design to an inverting amplifier with positive feedback instead of negative, causing the system to be unstable and switching very rapidly rather than stable
\ Since the output is saturated and the inverting input is grounded, the non-inverting output is not necessarily zero, but the trip point occurs when the inverting input reaches zero, so when \\(V_+ = V_- = \SI{0}{\volt}\\)
\ Since the op-amp draws no current, the currents across the resistors are equal
\ The trip points occur at:
\ \\[\begin{align}
\ & I_{in} = I_{out}
\ \\\ \implies & \frac{V_{1}}{R_{in}} = \frac{V_f}{R_f}
\ \\\ \implies & V_{in} - V_+ = \frac{R_{in}}{R_f}(V_+ - V_{out})
\ \\\ \implies & V_{in} = -\frac{R_{in}}{R_f}V_{out}
\ \end{align}\\]
\ where output voltage can be either the positive or negative saturation value
\ ![](/alevel/img/triangle_wave_generator.svg)
\ By connecting the ramp generator to the Schmitt trigger in a feedback loop, the ramp generator can be made to trip the Schmitt trigger when it saturates, thereby causing the input to switch to the equal but opposite-signed voltage, causing it to ramp in the opposite direction and generating a triangle wave
4 To record a high and low point for each cycle

5.2.4
4 Interference is not random
5 Schmitt triggers are used to equalise the amplitude by squaring the wave
\ Since Schmitt triggers affect the amplitude of the carrier, it cannot be used for AM signals since the amplitude carries information about the signal

5.3.1
3 Increasing the resistance of a parallel LC circuit increases the bandwidth, as well as decreasing the peak impedance
5 The resonant frequency occurs when the reactance of the capacitor is equal to the reactance of the inductor
\ At the resonant frequency, the impedance of an ideal parallel LC circuit is infinite
6 The buffer amplifiers are required to drive the low-impedance input of the LC bandpass filter with the high-impedance output of the filter

5.3.2
1 A tuned circuit is a parallel LC circuit
3 The aerial receives a signal that induces alternating currents into the input
\ The tuned circuit isolates frequencies that are within signal range of the carrier frequency
\ The rf amplifier amplifies the selected radio frequency
\ The diode demodulator extracts the audio signal from the carrier
\ The af amplifier amplifies the audio frequencies
\ The loudspeaker outputs the audio
6 The aerial receives a signal that induces alternating currents into the input
\ The tuned circuit isolates frequencies that are within signal range of the carrier frequency
\ The local oscillator 
\ The mixer modulates the radio frequency with the local frequency to form two more frequencies: one with the difference of the two frequencies, the intermediate frequency, and the other with the sum of the frequencies
\ The if filter is a stacked filter that isolates the intermediate frequency
\ The if amplifier amplifiers the intermediate frequency
\ The demodulator extracts the audio signal from the carrier
\ The af amplifier amplifies the audio frequencies
\ The loudspeaker outputs the audio

5.4.1
1 The ADC encodes an analogue signal into a digital stream of binary words, which is a group of 8 bits
\ The PSC converts the 8 parallel streams into a single stream
\ The transmission link sends the data from one point to another
\ The SPC groups every 8 bits into the stream into a parallel stream of binary words
\ The DAC decodes the stream of binary words into an analogue signal
2 To record a high and low point for each cycle
3 The range is the voltage represented by the highest value minus the voltage represented by the lowest value
\ The resolution is the voltage between consecutive values
\ The sample rate is how often the signal gets sampled
4 The resistors divide the supply voltage into equal divisions, normally integer voltages, which are the thresholds for each step of the ADC
\ The comparators compare each division with the input voltage, establishing a threshold where every comparator above the voltage is high and every comparator below it is low (or vice versa, depending on the configuration of the comparators)
\ The XOR gates recieve inputs from each pair of adjacent comparators, which finds the two divisions the input voltage is between since the comparator outputs change from low to high, thereby being the only XOR gate that is high
\ The logic gate system determines which bits go high for which voltage value
\ The monostable sends a pulse every cycle that causes the latch to transfer the data of the new word to the output
\ The latch retains the transmitted word until the next cycle
5 If \\(R_n = 2^{-n}R_0\\), then:
\ \\[\begin{align}
\ V_{out} & = -R_f\sum_{i=1}^n\frac{V_i}{R_i}
\ \\\ & = -R_f\sum_{i=1}^n\frac{V_i}{2^{-i}R_0}
\ \\\ & = -\frac{R_f}{R_0}\sum_{i=1}^n2^iV_i
\ \end{align}\\]
\ which represents the binary encoding of the voltage
6 The counter produces increasing digital values, normally in \\(\SI{1}{\volt}\\) steps
\ The DAC converts the digital value into an analogue voltage
\ The comparator remains low until the counter reaches the lowest value that exceeds the input signal
\ This activates the latch so it transmits the digital value
\ Advantages: fewer components
\ Disadvantages: slower, since it can depends on the counter's speed, whereas the flash converter is instant
7 Time-division multiplexing allows many channels per second to share the same link by rapidly cycling through each input at a high enough frequency such that enough information is retained to extract at the receiving end
8 In the worst case scenario, the signal alternates between 0 & 1, which is effectively a square wave with a time period of two bits, and therefore a frequency of half the bitrate
\ The bitrate is equal to \\(\text{word length} \cdot \text{channel number} \cdot \text{frame rate}\\)
9 Multiplexers are used in the transmission of TDM to select which input is being transmitted
\ Demultiplexers are used in the reception of TDM to select which output is being received

5.4.2
2 The source address identifies the device the signal is coming from, if there are multiple transmission devices on the same line; it is sent first so that collisions are detected at the earliest possible moment
\ The destination address identifies the device the signal is sending to; every device listens to the line, but only processes the information if its address matches the destination address
\ The data payload is the part of the payload that contains the information to be sent
\ The checksum is an identifier that is calculated from the payload and is used to verify the integrity of the payload
4 When the device transmits data, it simultaneously listen to the line to check that the source address is transmitted correctly; if not, there is another device transmitting that is corrupting the signal, so it stops transmitting waits for a predetermined time that is different for each device before transmitting again on a hopefully quiet line
5 The natural state of the line is high, so the first bit is a 0 to instruct the device that data is incoming
\ The stop bit is a 1 to inform the device that there is no more data to receive and the line returns to its high state
8 In the worst case scenario, the signal alternates between 0 & 1, which is effectively a square wave with a time period of two bits, and therefore a frequency of half the bitrate
