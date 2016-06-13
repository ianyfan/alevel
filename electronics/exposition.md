0
1 Conductors allow the flow of charge through them, whereas insulators do not
2 \\(\SI{1}{\volt} = \SI{1}{\joule\per\coulomb}\\)
3 \\(I = \frac{\mathrm dQ}{\mathrm dt}\\)
\ \\(\SI{1}{\ampere} = \SI{1}{\coulomb\per\second}\\)
5 Due to the law of the conservation of energy
\ Energy is always lost in heat, except in superconductors
6 The sum of the currents flowing into a junction is equal to the sum of the currents flowing out from the junction
\ Or: the algebraic sum of the currents at a junction is zero

1.1.1
1 ![](/alevel/img/pull-up_switch.svg)
\ A switch with a pull-up resistor generates a high signal when the switch is open and a low signal when the switch is closed
\ ![](/alevel/img/pull-down_switch.svg)
\ A switch with a pull-down resistor generates a low signal when the switch is open and a low signal when the switch is closed
3 \\(V = IR\\)
4 \\(W = Pt\\) where \\(W\\) is the work done
5 In practice, components may be able to tolerate a little above the maximum ratings, but the limits should still be observed
6 Voltmeters are wired in parallel with the component
\ Ammeters are wired in series with the component
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
1 CMOS: ![](/alevel/img/not_gate.svg)
\ Between 2-3 V, the output is uncertain
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
4 Ideal: ![](/alevel/img/led.svg)

1.1.3
3 Ideal: ![](/alevel/img/mosfet.svg)

1.1.4
2 This is because they clutter the diagram without adding any useful information

1.2.1
1 ![](/alevel/img/ldr.svg)
2 ![](/alevel/img/thermistor.svg)
3 \\(\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}\\)
4 \\(V_{out} = \frac{R_1}{R_1 + R_2}V_{in}\\)

1.2.2
1 Ideal: ![](/alevel/img/op-amp.svg)
3 The diode rectifies the \\(\SI{-13}{\volt}\\) to \\(\SI{0}{\volt}\\)
\ The resistors form a potential divider that converts the \\(\SI{+13}{\volt}\\) into \\(\SI{+5}{\volt}\\)
4 Ideal: ![](/alevel/img/diode.svg)
5 A zener diode placed in reverse bias in series with a resistor can provide a voltage equal to its breakdown voltage that is invariant to the supply voltage
6 Ideal: ![](/alevel/img/zener_diode.svg)

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
3 ![](/alevel/img/monostable.svg)
\ The input & output of the monostable is initially high, 
\ On the falling edge of the input, the RC network goes high, causing the output to go low
\ The feedback of the output back to the first monostable keeps the RC network high until the capacitor charges halfway, causing the output to return hig
4 The clamping diodes prevent the inputs from going higher than \\(\SI{0.7}{\volt}\\) outside the limits

1.3.2
1 The trip point when the gate is low is higher than when it is high
2 ![](/alevel/img/schmitt_trigger_oscillator.svg)
\ When the output of the Schmitt trigger is high, the capacitor charges through the resistor until it reaches the upper trip point, when the Schmitt trigger goes low, causing the capacitor to discharge through the resistor until it reaches the the lower trip point
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
2 ![](/alevel/img/bistable_nor.svg)
3 ![](/alevel/img/bistable_nand.svg)
4 When the enable input is high, the data input is copied to the output
\ When the enable input is low, the output is fixed
5 ![](/alevel/img/latch.svg)
\ The data input demultiplexes the enable input, sending it to the set or reset input depending on whether the data is high or low
6 A rising-edge triggered D flip-flop only copies the data to the output on the rising edge of the clock input
7 ![](/alevel/img/d_flip-flop.svg)
\ The master latch copies the data input to its output while the clock input is low
\ When the clock input goes high, the master latch locks its output, and the slave latch is enabled, causing the data input at the time of the rising edge to be stored regardless of whether it changes any further
8 The clock inputs are connected so that information can be stored simultaneously

2.2.1
1 The coupling capacitor removes d.c. bias
4 The gain is effectively infinite, causing the output to saturate unless the difference in voltage between the inputs is effectively 0
5 ![](/alevel/img/voltage_follower.svg)
\ \\(V_{out} = A(V_+ - V_-) = A(V_+ - V_{out})\\)
\ Re-arranging gives \\(V_{out} = \frac{A}{A + 1}V_+\\)
\ A is so large that the 1 is negligible, so \\(V_{out} = V_+\\)
\ The pull-down resistor allows a safe path for current leak to 0
6 The input of an op-amp has high impedance and the output can source more current

2.2.2
1 ![](/alevel/img/non-inverting_amplifier.svg)
\ The output does not saturate, so \\(V_- = V_+\\), and from the potential divider formula:
\ \\(V_{out} = \frac{R_f + R_d}{R_d}V_- = V_+(1 + \frac{R_f}{R_d})\\) so \\(G = 1 + \frac{R_f}{R_d}\\)
2 ![](/alevel/img/inverting_amplifier.svg)
\ The output does not saturate, so the difference in voltage of the inputs is effectively 0
\ Since the non-inverting input is tied to ground, this means that there is a virtual earth at the inverting input
\ \\(V_{out} = \frac{-R_f}{R_{in}}V_- = -\frac{R_f}{R_{in}}V_{in}\\) so \\(G = -\frac{R_f}{R_{in}}\\)
4 Equating current gives \\[-\frac{V_{out}}{R_f} = \sum_{i=1}^n\frac{V_i}{R_i}\\]

2.3.1
1 ![](/alevel/img/one_bit_counter.svg)
\ D switches state on every rising clock, causing it to emulate a one-bit counter
2 ![](/alevel/img/binary_counter.svg)
\ Connecting the inverted output of each flip-flop in an array to the clock input of the next one causes the array to emulate a binary ripple up-counter
3 AND gates processing the high bits of n causes its output to go high upon reaching n, which can then be connected to the set & reset inputs of the respective flip-flops that will set the counter to m
4 ![](/alevel/img/binary_counter_timing.svg)
5 ![](/alevel/img/7-seg.svg)
\ The decoder converts a binary value (from 0-9) into the right outputs to show on a 7-segment display

2.3.2
2 The frequency division of an oscillating signal can be achieved by connecting the signal to a binary counter that counts up to the desired number, flips the state of the output and resets

2.4.1
1 Signal source -> Pre-amplifier -> Tone controls -> Volume control -> Voltage amplifier -> Power amplifier -> Loudspeaker
\ The signal source receives an audio signal using a microphone, which converts it into an electric signal with an amplitude of a few millivolts
\ The pre-amplifier boosts the amplitude of the signal from the microphone to increase the signal-to-noise ratio so that noise in the circuit does not distort the signal as much
\ The tone control adjusts the frequency balance of the signal, in terms of bass, midtones and treble
\ The volume control adjusts the amplitude of the signal according to a variable input
\ The voltage amplifier boosts the amplitude of the signal, from the order of millivolts to volts
\ The power amplifier boosts the power of the signal, mainly in the current
\ The loudspeaker outputs the signal in audio
2 The output impedance should be lower than the following input impedance to minimise signal loss
3 The position of the wiper on the potentiometer determines how much of the signal passes through to the voltage amplifier

2.4.2
1 Impedance is inversely proportional to frequency: \\(X = \frac{1}{2\pi fC}\\)
2 The break frequency is the frequency at which half the input power is outputted, where the impedance of the capacitor is equal to the resistance of the resistor
3 Passive filters cannot boost signals, only cut
4 ![](/alevel/img/treble_cut_filter.svg)
\ Treble-cut filters are based on an inverting amplifier with a capacitor wired in parallel with the feedback resistor
\ ![](/alevel/img/bass_cut_filter.svg)
\ Bass-cut filters are based on an inverting amplifier with a capacitor wired in series with the input resistor
\ ![](/alevel/img/bandpass_filter.svg)
\ A bandpass filter includes both capacitors

2.5.1
2 The hardware cannot be easily changed, but the software can be reprogramming the microcontroller
3 PICs are economical because they are produced in vast quantities
\ The program can be developed once and then reused by programming multiple microcontrollers
\ Developing the program beforehand allows the operation to be analysed without anything being built
\ The microcontroller can be reprogrammed in the future to adjust its operation with no manufaction cost
\ A single PIC can perform the same operation as multiple chips
4 Microcontrollers work entirely in digital, so must convert analogue inputs into digital using an ADC
\ Microcontrollers run at around 1 MHz, so are much slower than hardware systems

2.5.2
1 The input port is the interface from which a microcontroller receives input from the external circuit
\ The output port is the interface from which a microcontroller provides an output to the external circuit
\ A memory address is a unique identifier for each location in memory, where the program instructions are stored
\ The registers in the microcontroller are registers which can be immediately used to store data for use by the CPU
2 An ADC converts an analogue signal into a binary word whose value is proportional to the input voltage
4 One hex character can represent 4 bits
\ One byte is 8 bits, which can be represented using 2 hex characters
\
\ | Hex | Binary |
\ |:---:|:------:|
\ | `0` | `0000` |
\ | `1` | `0001` |
\ | `2` | `0010` |
\ | `3` | `0011` |
\ | `4` | `0100` |
\ | `5` | `0101` |
\ | `6` | `0110` |
\ | `7` | `0111` |
\ | `8` | `1000` |
\ | `9` | `1001` |
\ | `a` | `1010` |
\ | `b` | `1011` |
\ | `c` | `1100` |
\ | `d` | `1101` |
\ | `e` | `1110` |
\ | `f` | `1111` |

4.1.1
1 ![](/alevel/img/mosfet_id_vgs.svg)
\ Below the threshold voltage (typically \\(\SI{2}{\volt}\\)), the MOSFET is in its high resistance state, so does not allow the flow of current
\ Above the threshold voltage, the current rises rapidly with voltage until it saturates
\ The change in current with voltage is the transconductance of the MOSFET, \\(g_m\\), so the formula \\(I_d = g_m(V_{gs} - V_{th})\\) can be used whilst the current is not saturated
\ Transconductance is measured in siemens, where \\(\SI{1}{\siemens} = \SI{1}{\ampere\per\volt}\\)
\ ![](/alevel/img/mosfet_id_vds.svg)
\ The current also depends on \\(V_{ds}\\): when it is small, the MOSFET behaves less like a transistor and more like a resistor whose resistance is controlled by \\(V_{gs}\\)
2 The resistance falls as \\(V_{gs}\\) rises
\ The drain-source voltage must be small so that the MOSFET is in its resistive region
3 ![](/alevel/img/vcr.svg)
\ \\(V_{OUT}\\) rises with \\(V_R\\)
4 An analogue switch is a voltage-controlled switch
\ ![](/alevel/img/analogue_switch_model.svg)
\ ![](/alevel/img/analogue_switch_mosfet.svg)
\ A multiplexer selects which input is sent to the output (a digital multiplexer can also be contructed using logic gates)
\ ![](/alevel/img/multiplexer_model.svg)
\ ![](/alevel/img/multiplexer_mosfet.svg)
\ A tristate is a buffer that can selectively transmit a digital signal using a third state that assumes high impedance, effectively removing the component from the circuit
\ ![](/alevel/img/tristate_model.svg)
\ ![](/alevel/img/tristate_mosfet.svg)
5 ![](/alevel/img/source_follower.svg)
\ As \\(V_g\\) rises, so does \\(V_s\\) so that \\(V_{gs}\\) stays in the resistive region
\ Because of that, \\(V_s\\) can be calculated:
\ \\[\begin{align}
\ V_s & = I_dR + V_{SS}
\ \\\ & = g_m(V_{gs} - V_{th})\cdot R + V_{SS}
\ \\\ & = g_mR(V_g - V_{th}) - g_mR\cdot V_s + V_{SS}
\ \\\ & = \frac{g_mR(V_g - V_{th}) + V_{SS}}{1 + g_mR}
\ \\\ & = (1 - \frac{1}{1 + g_mR})(V_g - V_{th}) + \frac{V_{SS}}{1 + g_mR}
\ \end{align}\\]
\ If \\(g_mR\\) is sufficiently large, then the gain is effectively 1, so the source voltage is always lower than the gate voltage by the threshold voltage
\ If the input signal is an ac signal, then this offset can be ignored by using coupling capacitor and a biasing network to ensure that the gate voltage is always above the threshold voltage
6 ![](/alevel/img/mosfet_voltage_amplifier.svg)
\ The bias network is required to ensure that the gate voltage remains in the resistive region
\ \\[\begin{align}
\ V_d & = V_{DD} - I_dR_d
\ \\\ & = V_{DD} - g_m(V_{gs} - V_{th})\cdot R_d
\ \\\ & = -g_mR_d\cdot V_g - g_mR_d\cdot V_{th} + V_{DD}
\ \end{align}\\]
7 This equation applies for ac signals, since the coupling capacitors allow the offset to be ignored, so \\(V_{OUT} = -g_mR_d\cdot V_{IN}\\)
8 ![](/alevel/img/mosfet_drain_bias_amplifier.svg)
\ Drain bias is achieved by connecting the gate of the MOSFET to the drain through a resistor so that the gate voltage is biased to the same voltage as the drain voltage (assuming that no current flows through the resistor)
\ Drain bias is better than fixed bias because MOSFETs have different characteristics, which cause their resistive region to occur at different voltages, so a fixed bias may work for some MOSFETs but not others so would have to be adjusted for different MOSFETs, but using drain bias ensures that the bias falls within the resistive region of every MOSFET regardless of their charactaristics, and means that a single circuit design works for every MOSFET

4.2.1
1 The data bus contains the data that is read from or written to memory
\ The address bus selects the data location to be used
\ The control bus controls how the module functions
2 The number of data lines is equal to the word length
3 The number of different locations in the memory module is equal to 2 to the power of the number of address lines
4 The lines are normally high, and must be taken low to perform their function
5 Writing: place location address on address bus -> place data on data bus -> pull chip-enable low -> pulse write-enable low
\ Reading: place location address on address bus -> wait for location to be accessed -> pull chip-enable low -> pulse read-enable low

4.2.2
1 Non-volatile memory retains the data stored upon power loss, whereas volatile memory does not
2 ![](/alevel/img/volatile_memory_cell.svg)
\ The tristate allows the input and output to be on the same line
3 ![](/alevel/img/non_volatile_memory_cell.svg)
\ The capacitor retains data since a MOSFET gate draws no current, so the capacitor does not discharge
\ When the data is read, if the capacitor is charged, the lower MOSFET has low impedance, so current flows through the resistor and the output line goes low
\ If the capacitor is not charged, the lower MOSFET has high impedance, so current does not flow through the resistor and the output line goes high
4 The tristate effects high impedance between the unwanted memory module and the data bus, effectively disconnecting it, allowing only the desired memory module to write to it
5 Multiplexers are used to select the memory location to be processed using the data on address bus, with the selector acting as an extra address bit

4.2.3
1 A register is a memory module used by the processor to hold data that it is processing, with separate input and output buses
2 Using multiple logic systems, one for each bit in the byte, two binary words can be combined in parallel, whether it be ANDing, XORing or adding
3 Two's complement allows negative numbers to be represented in binary by inverting each bit and adding one to the result, essentially taking the number modulo 2
4 A logic system can be used to combine two words bit by bit as they are transmitted from two shift registers and fed into another shift register

4.3.1
1 Closed-loop control systems include a feedback loop from the output in order to adjust its operational parameters to more closely match the desired result, whereas open-loop systems do not
2 ![](/alevel/img/on-off_servo_block_diagram.svg)
\ The switch turns on or off the transducer depending on whether the value detected at the sensor is above or below the reference, with the result then being fed back to the sensor
5 Because the transducer must be either on or off, it cannot exactly match the power required, going either above or below the desired value, "hunting" for it

4.3.2
1 ![](/alevel/img/proportional_control_block_diagram.svg)
\ Proportional control systems have a continuous output whose value is determined by the difference between the sensor and the reference causing the transducer to ramp up or down more quickly or slowly, until the transducer is at the value required for them to match
2 ![](/alevel/img/difference_amplifier.svg)
\ \\[\begin{alignat}{2}
\ & V_2 - && V_- = V_- - V_{out}
\ \\\ \implies & V_{out} && = 2V_- - V_2
\ \\\ & && = 2V_+ - V_2
\ \\\ & && = 2\frac{V_1}{2} - V_2
\ \\\ & && = V_1 - V_2
\ \end{alignat}\\]
3 ![](/alevel/img/ramp_generator.svg)
\ An op-amp ramp generator has a similar design to an inverting amplifier
\ Since the output is not saturated and the non-inverting input is grounded, the difference between the two inputs is effectively zero and there is a virtual ground at the inverting input, so \\(V_- = V_+ = \SI{0}{\volt}\\)
\ Since the op-amp draws no current, the current across the resistor is equal to the current across the capacitor
\ The output voltage is:
\ \\[\begin{alignat}{2}
\ & Q_C && = CV_C
\ \\\ \implies & \int I_C \mathrm{d}t && = C(V_- - V_{out})
\ \\\ \implies & \int I_R \mathrm{d}t && = -CV_{out}
\ \\\ \implies & V_{out} && = -\frac{1}{C}\int \frac{V_R}{R} \mathrm{d}t
\ \\\ & && = -\frac{1}{RC}\int V_{in} - V_- \mathrm{d}t
\ \\\ & && = -\frac{1}{RC}\int V_{in} \mathrm{d}t
\ \end{alignat}\\]
\ If the input voltage is constant, then \\(\Delta V_{out} = -V_{in}\frac{\Delta t}{RC}\\)
5 Proportional systems respond more slowly because as it approaches the desired value, the output is not saturated like in on-off systems, and therefore change more slowly
\ It asymptotically approaches the desired value

4.3.3
1 ![](/alevel/img/diode_bridge.svg)
\ The diode bridge rectifies the ac signal so that there is no reverse current (but drops \\(\SI{1.4}{\volt}\\) since the signal passes through two diodes)
\ The capacitor stores charge on the rising half of each cycle before releasing it on the falling half in order the smooth the signal, so it is always above a certain value
2 A switched-mode power supply is much more efficient than a simple diode bridge and can run off mains power to produce a variable constant direct current
\ ![](/alevel/img/power_supply_block_diagram.svg)
\ The switched oscillator increases the frequency of the ac signal, since the transformer is more efficient at higher frequencies
\ The transformer steps down the voltage to a value closer to required, which increases the current
\ The rectifier converts the signal to dc by inverting the negative part of the signal
\ The smoother stabilises the voltage, reducing ripple in the signal
\ The voltage reference provides the required voltage, generally using a zener diode
\ The comparator determines how well the processed signal matches the voltage reference, and turns on the oscillator when the voltage is too low
\ This feedback is sent back to the oscillator through an opto-isolator, an LED phototransistor pair that isolates the high-voltage circuit from the low-voltage
3 ![](/alevel/img/voltage_regulator_block_diagram.svg)
\ ![](/alevel/img/voltage_regulator_circuit.svg)
\ A dc voltage regulator generates a fixed dc voltage from an unstabilised dc supply
\ The reference is the desired output voltage and is commonly produced by a zener diode in reverse bias
\ The comparator compares the output voltage with the reference voltage and turns on or off the MOSFET follower accordingly
\ When on, the MOSFET follower allows current to flow from the input to the output, charging a capacitor
\ Using an on-off servo control system here is acceptable since the capacitor provides intertia, minimising the effect of hunting

4.4.1
1 The CPU is where the data of a program is processed
\ The memory contains the program instructions in flash memory and a lookup table in SRAM
\ The input port is an eight-bit bus that can receive input from an external circuit
\ The output port is an eight-bit bus that the CPU can put data on to send to an external circuit
\ The clock generates a continuous series of pulses that are used by the CPU to synchronise its operations
\ The reset resets the microcontroller to the start of the program, clearing the registers
2 ![](/alevel/img/microcontroller_block_diagram.svg)
\ The address bus is used by the CPU to instruct the memory which instruction to fetch
\ The data bus contains data loaded from the memory or read from the input and processed by the CPU or sent to the output port
\ The control bus determines how data is used, using enable & read/write pins
3 The program counter contains the address of the instruction to be fetched; it is incremented after the instruction is fetched, but may be changed once the instruction is executed if it contains a jump
\ The stack pointer stores the address of the top of the stack, which is changed each time a subroutine is called or returned from
\ The general purpose registers can be used by the CPU for immediate storage & processing of data, as well as for the transference of data to & from the I/O ports
4 The tristates determine whether the port is active, and the D flip-flops latch the data upon use
5 In each machine cycle:
\
\ * the value of the program counter is copied onto the address bus
\ * the data at that address is fetched from memory loaded into the instruction register
\ * the program counter is incremented
\ * the instruction is executed
6 When the microcontroller is programmed, the label of each jump instruction is replaced with the address which the label is attached to, so when the jump instruction is executed, this address is loaded into the program counter
7 When the CPU's reset pin is activated, the program counter is loaded with the value 00, which is the address of the first instruction of the program
8 Hexadecimal directly translates into binary

4.4.2
0 Assembler:
\
\ * `MOVI Sd,n :` Copy the byte n into register Sd
\ * `MOV Sd,Ss :` Copy the byte from Ss to Sd
\ * `ADD Sd,Ss :` Add the byte in Ss to the byte in Sd and store the result in Sd
\ * `SUB Sd,Ss :` Subtract the byte in Ss from the byte in Sd and store the result in Sd
\ * `AND Sd,Ss :` Logical AND the byte in Ss with the byte in Sd and store the result in Sd
\ * `EOR Sd,Ss :` Logical EOR the byte in Ss with the byte in Sd and store the result in Sd
\ * `INC Sd    :` Add 1 to Sd
\ * `DEC Sd    :` Subtract 1 from Sd
\ * `IN Sd,I   :` Copy the byte at the input port into Sd
\ * `OUT Q,Ss  :` Copy the bype in Ss to the output port
\ * `JP e      :` Jump to label e
\ * `JZ e      :` Jump to label e if the result of the last ADD, SUB, AND, EOR, INC, DEC, SHL or SHR was zero
\ * `JNZ e     :` Jump to label e if the result of the last ADD, SUB, AND, EOR, INC, DEC, SHL or SHR was not zero
\ * `RCALL s   :` Push the program counter onto the stack to store the return address and then jump to label s
\ * `RET       :` Pop the program counter from the stack to return to the place the subroutine was called from
\ * `SHL Sd    :` Shift the byte in Sd one bit left putting a 0 into the lsb
\ * `SHR Sd    :` Shift the byte in Sd one bit right putting a 0 into the msb
\
\ Subroutines:
\
\ * `readtable :` copies the byte in the lookup table pointed at by S7 into S0; the lookup table is labelled table: when S7=00 the first byte from the table is returned in S0
\ * `wait1ms   :` waits 1ms before returning
\ * `readadc   :` returns a byte in S0 proportional to the voltage at ADC
1 Suppose `n` is hexadecimal number with the desired bit high:
\
\           MOVI S1,n
\     loop: IN   S0,I
\           AND  S0,S1
\           JZ   loop
\           ...        ; continue
2           MOVI S0,n
\     loop: DEC  S0
\           JNZ  S0
\           ...        ; continue
\ If the length of waiting time is longer than can be stored in one register, two registers and a nested loop can be used:
\
\            MOVI S0,n
\     outer: MOVI S1,m
\     inner: DEC  S1
\            JNZ  inner
\            DEC  S0
\            JNZ  outer
\            ...        ; continue
3 Suppose `n` is the desired location
\
\     MOVI  S7,n
\     RCALL readtable
\     OUT   Q,S0
4 To selectively invert bits in a register, `EOR` the register with the hexadecimal number which has the desired inverted bits high, for example:
\
\     MOVI  S1,n
\     EOR   S0,S1
5     IN    S7,I
\     RCALL readtable
6 Use `SHL` and `SHR` respectively
7 The unconditional jump `JP` jumps to the indicated label
\ The conditional jumps `JZ` & `JNZ` jumps to the indicated label if & only if the previous calculation resulted in a zero, or not zero, respectively
8 Use `RCALL` to call a subroutine, and `RET` to return from a subroutine
\ Since data in registers persist, they can be used in a subroutine to store information so that the outside program can use them

4.4.3
1 Therefore, only the top of the stack needs to tracked, which is updated upon pushing or popping the stack
2 When a subroutine is called, the stack pointer is incremented and the address held by the program counter, which is the address of the instruction after the subroutine call, is pushed onto the stack, by being copied to the address held by the stack pointer
\ Then, the program counter is loaded with the address of the start of the called subroutine
\ When the subroutine returns, the address held by the stack pointer is popped from the stack and copied into the program counter
\ Then, the stack pointer is decremented
3 Modularity means that the program can be designed in distinct parts, and therefore easier to write
\ Readability, since each subroutine is self-contained and can be conceptualised separately
\ Reuseability, since the subroutine only needs to be designed once and can be used in several places
\ Testability, since the subroutines can be tested separately, making them easier to debug
\ Saves memory, since subroutines only need to be stored once, instead of in multiple places
4 See [4.4.2](#4.4.2)

5.1.1
1 RGB pixels facilitate a colour display
2 Generally, the higher the signal, the brighter the (sub-)pixel
3 A raster scan is the method of rendering a frame used by CRT screens since they can only render one pixel at a time, so sweep across the screen bit by bit moving across each line and going down each line
\ Line synchronisation signals instruct the screen to start scanning a new line
\ Frame synchronisation signals instruct the screen to start scanning a new frame
4 Splitting the RGB signals means that only a third of the total data is sent down each line, so the bandwidth is a third of what is would otherwise need to be
5 The higher the frame refresh rate, the smoother the image
\ However, a higher frame rate also increases the bandwidth
\ The minimum acceptable frame rate is 25 Hz since that is the persistence of vision
6 The bitrate is the number of bits that must be sent down the cable in a second, and is equal to \\(\text{pixels per frame} \cdot \text{frame rate}\\)
\ The bandwidth is half the bitrate
7 The number of intensity levels is \\(2^\text{word length}\\)
8 The bitrate is equal to \\(\text{bits per pixel} \cdot \text{pixels per frame} \cdot \text{frame rate}\\)
9 This is since maximum bandwidth occurs when the bitstream alternates between 0 & 1, so each cycle is 2 bits, so the bandwidth is half the bitrate
10 Compression reduces the bandwidth
\ This may cause the image to become blockier, as there is less variation in consecutive pixels

5.2.1
1 The frequency of the carrier is normally much higher than the frequency of the signal, by at least a magnitude
2 With the signal voltage controlling the gain of the amplifier, a higher signal causes a higher amplitude in the carrier, and a lower signal causes a lower amplitude in the carrier (or vice versa, depending on the configuration of the amplifier)
\ Example using a MOSFET: ![](/alevel/img/am_modulator.svg)
3 The overall signal has a frequency equal to the carrier frequency, but the shape of the envelope of the signal has a frequency equal to the signal frequency
\ Assuming a constant signal frequency:
\ ![](/alevel/img/am_voltage_time.svg)
\ ![](/alevel/img/am_amplitude_frequency.svg)
4 ![](/alevel/img/am_demodulator.svg)
\ The diode rectifier removes the negative signal
\ The low pass filter removes the carrier frequency, since it is much higher than the signal frequency
5 The bandwidth is the distance from the lowest sideband to the highest sideband
\ Each sideband is a distance equal to its frequency away from the carrier frequency, so the most extreme sideband is a distance equal to the maximum signal frequency away
\ Therefore, the bandwidth is equal to twice the maximum signal frequency

5.2.2
1 The frequency of the carrier is normally much higher than the frequency of the signal, by at least a magnitude
2 The signal voltage controls the frequency of the oscillator, whereby the higher the signal voltage, the higher the frequency in the carrier (or vice versa, depending on the configuration of the oscillator)
\ This is the exact role of a variable-frequency oscillator
3 ![](/alevel/img/fm_demodulator.svg)
\ The monostable produces a short pulse for each cycle of the recieved signalo
\ The higher the voltage in the signal frequency, the shorter the carrier time period, so the longer the monostable pulse in relation to the cycle length
\ The treble-cut filter averages the voltage in each cycle, so the shorter cycle time becomes a higher voltage, mirroring the input signal
4 ![](/alevel/img/fm_voltage_time.svg)
5 This is a rule of thumb

5.2.3
1 A pulse-width modulated carrier is a digital stream with a fixed-length high-low cycle and a variable-length high pulse during it
\ The mark-space ratio is the ratio of the period of the high pulse to the period of the cycle
2 Assuming the triangle wave generator is fast enough that the signal voltage is considered constant during each cycle, the length of the cycle is the time period of the triangle
\ The length of the pulse is determined by the period of time the voltage of the triangle wave is higher (or lower, depending on the configuration of the comparator) than the voltage of the signal, and is therefore has a linear relationship with the voltage
3 See [4.3.2](#4.3.2) for the operation of a ramp generator
\ ![](/alevel/img/schmitt_trigger.svg)
\ A non-inverting Schmitt trigger has a similar design to an inverting amplifier with positive feedback instead of negative, causing the system to be unstable and switching very rapidly rather than stable
\ Since the output is saturated and the inverting input is grounded, the non-inverting output is not necessarily zero, but the trip point occurs when the non-inverting input reaches zero, so when \\(V_+ = V_- = \SI{0}{\volt}\\)
\ Since the op-amp draws no current, the currents across the resistors are equal
\ The trip points occur at:
\ \\[\begin{align}
\ & I_{in} = I_{out}
\ \\\ \implies & \frac{V_{1}}{R_{in}} = \frac{V_f}{R_f}
\ \\\ \implies & V_{in} - V_+ = \frac{R_{in}}{R_f}(V_+ - (V_{out})
\ \\\ \implies & V_{in} = -\frac{R_{in}}{R_f}V_{out}
\ \end{align}\\]
\ where the output voltage can be either the positive or negative saturation value, so the trip point has the opposite sign to the current output voltage
\ ![](/alevel/img/triangle_wave_generator.svg)
\ By connecting the ramp generator to the Schmitt trigger in a feedback loop, the ramp generator can be made to trip the Schmitt trigger when it saturates, thereby causing the input to switch to the equal but opposite-signed voltage, causing it to ramp in the opposite direction and generating a triangle wave
4 To record a high and low point for each cycle

5.2.4
1 A twisted-pair cable transmits the signal down one wire in a cable and an inverted copy of the signal down another wire wrapped round the other; since the interference picked up by the wires are the same, taking the difference of the signals on the receiving end recovers the original signal
2 This is attenuation; a further problem is that different frequencies may have different attenuations, which can change the shape of the resultant signal
\ Because of this, repeaters are placed periodically along a line to maintain the amplitude of the signal at a high level
3 Noise is generally added by electrical components due to thermal noise
4 Interference is not random
5 Twisted-pair cable is almost immune to interference, but may be susceptible to noise since it has moderate attenuation
\ Optical fibre is immune to interference since the signal is carried by infrared light, and outside sources of light are blocked by a plastic coating, and has very low noise since there are no electrical components and it has low attenuation
\ Radio waves are susceptible to noise & interference because it has high attenuation, there are many other radio transmitters and there is no way to screen the signal, but using frequency modulation can mitigate these problems
6 The signal-to-noise ratio refers to the amplitude of the signal compared to the noise; a high signal-to-noise ratio is desirable so that the signal is more easily extracted
\ The more a signal is attenuated, the lower its signal-to-noise ratio
7 Schmitt triggers are used to reproduce the pulses in the original signal by squaring the wave to equalise the amplitude
\ Since Schmitt triggers affect the amplitude of the carrier, it cannot be used for AM signals since the amplitude carries information about the signal

5.3.1
1 FDM allows many signals to share the same transmission medium without interference, such as radio waves in the atmosphere, by only allowing each carrier to be within an allocated range of frequencies
2 If the bandwidth for each channel is the same, then the maximum number of channels on a link is equal to the bandwidth of the link divided by the bandwidth of a channel
3 Increasing the resistance of a parallel LC circuit increases the bandwidth, as well as decreasing the peak impedance
5 The resonant frequency occurs when the reactance of the capacitor is equal to the reactance of the inductor:
\ \\[\begin{align}
\ & X_C = X_L
\ \\\ \implies & \frac{1}{2\pi fC} = 2\pi fL
\ \\\ \implies & f^2 = \frac{1}{4\pi^2 LC}
\ \\\ \implies & f = \frac{1}{2\pi\sqrt{LC}}
\ \end{align}\\]
\ At the resonant frequency, the impedance of an ideal parallel LC circuit is infinite
6 ![](/alevel/img/stacked_filter_circuit.svg)
\ The three filters have slightly different resonant frequencies so their frequency responses combine to form one that has a relatively flat top for a band of frequencies from the resonant frequency of the lowest filter to the resonant frequency of the highest filter
\ Buffer amplifiers are required to drive the low-impedance input of the LC bandpass filter with the high-impedance output of the filter

5.3.2
1 A tuned circuit is a parallel LC circuit
2 But also increases the impedance
3 ![](/alevel/img/am_radio_receiver.svg)
\ The aerial receives a signal that induces alternating currents into the input
\ The tuned circuit isolates frequencies that are within signal range of the carrier frequency
\ The rf amplifier amplifies the selected radio frequency
\ The demodulator extracts the audio signal from the carrier
\ The af amplifier amplifies the audio frequencies
\ The loudspeaker outputs the audio
4 A balance must be struck between the selectivity of the receiver and the attenuation of the signal
5 However, since the signal is weak, the signal-to-noise ratio may be low
6 A superheterodyne receiver is better than a simple radio receiver because the circuit can be tuned to differenct frequencies and
\ ![](/alevel/img/superhet.svg)
\ The aerial receives a signal that induces alternating currents into the input
\ The tuned circuit isolates frequencies that are within signal range of the carrier frequency
\ The local oscillator produces oscillations whose frequency is offset from the radio frequency
\ The mixer modulates the radio frequency with the local frequency to form two more frequencies: one with the difference of the two frequencies, the intermediate frequency, and the other with the sum of the frequencies; this translates the signal to a lower frequency, which is easier to work with
\ The i.f. filter is a stacked filter that isolates the intermediate frequency
\ The i.f. amplifier amplifiers the intermediate frequency
\ The demodulator extracts the audio signal from the carrier
\ The a.f. amplifier amplifies the audio frequencies
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
4 ![](/alevel/img/flash_adc.svg)
\ The resistors divide the supply voltage into equal divisions, normally integer voltages, which are the thresholds for each step of the ADC
\ The comparators compare each division with the input voltage, establishing a threshold where every comparator above the voltage is high and every comparator below it is low (or vice versa, depending on the configuration of the comparators)
\ The XOR gates recieve inputs from each pair of adjacent comparators, which finds the two divisions the input voltage is between since the comparator outputs change from low to high, thereby being the only XOR gate that is high
\ The logic gate system determines which bits go high for which voltage value
\ The monostable sends a pulse every cycle that causes the latch to transfer the data of the new word to the output
\ The latch retains the transmitted word until the next cycle
5 ![](/alevel/img/dac.svg)
\ If \\(R_n = 2^{-n}R_0\\), then:
\ \\[\begin{align}
\ V_{out} & = -R_f\sum_{i=1}^n\frac{V_i}{R_i}
\ \\\ & = -R_f\sum_{i=1}^n\frac{V_i}{2^{-i}R_0}
\ \\\ & = -\frac{R_f}{R_0}\sum_{i=1}^n2^iV_i
\ \end{align}\\]
\ which represents the binary encoding of the voltage
6 ![](/alevel/img/ramp_adc.svg)
\ The counter produces increasing digital values, normally in \\(\SI{1}{\volt}\\) steps
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
1 The packets are sent asynchronously, so the receiving computer must be able to recognise arrival of a packet and interpret it correctly
2 The source address identifies the device the signal is coming from, if there are multiple transmission devices on the same line; it is sent first so that collisions are detected at the earliest possible moment
\ The destination address identifies the device the signal is sending to; every device listens to the line, but only processes the information if its address matches the destination address
\ The data payload is the part of the payload that contains the information to be sent
\ The checksum is an identifier that is calculated from the payload and is used to verify the integrity of the payload, such as a parity check
3 Each device is connected to the link through an analogue switch, which can turn on if it is transmitting data, or turn off if it isn't, effectively disconnecting the device from the line
4 As soon as the line becomes free, the device starts transmitting data, simultaneously listening to the line to check that the source address is transmitted correctly; if not, there is another device transmitting that is corrupting the signal, so it stops transmitting waits for a predetermined time that is different for each device before transmitting again on a hopefully quiet line
5 The natural state of the line is high, so the first bit is a 0 to instruct the device that data is incoming
\ The stop bit is a 1 to inform the device that there is no more data to receive and the line returns to its high state
6 ![](/alevel/img/shift_register.svg)
\ A shift register is a row of D-type latches whose outputs are connected to the input of the next latch, so that on each clock pulse, the output each latch is loaded into the next latch along, causing the data to "shift" along
7 In a parallel-serial converter, the parallel data is loaded into the shift register using multiplexers, allowing each clock pulse to transmit each bit in the word through the output of the last latch in a serial fashion
\ In a serial-parallel converter, the serial data is loaded into the first latch and shifted along, and after the right number of clock pulses, the output of each latch is copied onto a parallel bus
\ Crystal oscillators are used since each end of transmission must use the same timings, and crystal oscillators have very high precision
8 In the worst case scenario, the signal alternates between 0 & 1, which is effectively a square wave with a time period of two bits, and therefore a frequency of half the bitrate
