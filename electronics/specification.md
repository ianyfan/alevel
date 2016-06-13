0
1 The concepts of conductors and insulators in terms of the mobility of charge
2 Voltage as a measure of the energy per charge at a point in a circuit
3 Current as the rate of transfer of charge past a point in a circuit
4 Need for a power supply to maintain a current in a circuit
5 The conversion of energy from electrical to other forms as charge moves round a circuit
6 The behaviour of currents at a junction
7 The voltage across a series circuit is the sum of the voltage across the components
8 The current in a series circuit is the same in all the components

1.1.1
1 Recall how to use switches and pull-up or pull-down resistors in series with a power supply to generate digital signals
2 Recall that, unless otherwise stated, logic 1 (high) is a signal at \\(\SI{+5}{\volt}\\) and logic 0 (low) is a signal at \\(\SI{0}{\volt}\\)
3 Recall and use the defining equation for resistance (\\(R = \frac{V}{I}\\))
4 Recall and use the equation for power (\\(P = VI\\)) to calculate the rate of heating, or output power, or a component
5 Recall that components have maximum ratings for current, voltage or power
6 Recall how to use multimeters as voltmeters, ammeters and ohmmeters to measure voltage, current and resistance in a circuit
7 Understand the use of the prefixes G, M, k, m, μ, n and p when calculating values of quantities

1.1.2
1 Recall the transfer characteristic of a NOT gate (an input above \\(\SI{+3}{\volt}\\) gives \\(\SI{0}{\volt}\\) at the output, an input below \\(\SI{+2}{\volt}\\) gives \\(\SI{+5}{\volt}\\) at the output) and represent it as an input-output graph
2 Recall the truth tables of the following two-input logic gates: AND, EOR, NAND, NOR, OR
3 Understand the use of an LED to indicate the state of a logic gate's output (including the need for a series resistor)
4 Recall the transfer characteristic of an LED and represent it as a current-voltage graph (no current in reverse bias; current rises rapidly in forward bias when voltage reaches \\(\SI{2}{\volt}\\))

1.1.3
1 Recall that logic gates can only source or sink currents of a few milliamps, so cannot supply much power to output devices
2 Understand that a MOSFET is a voltage-controlled resistor (the voltage at the gate determines the resistance between the drain and the source)
3 Recall the transfer characteristic of a MOSFET (drain-source resistance is infinite until gate-source voltage reaches a threshold value, then drops to a constant low value for higher gate-source voltages) and represent it as a resistance-voltage graph
4 Recall that MOSFETs with appropriate threshold voltages can act as drivers, sinking current from motors, heaters, buzzers and lamps

1.1.4
1 Recall and use standard circuit symbols to draw circuit diagrams
2 Understand that circuit diagrams omit power supply connection for integrated circuits

1.1.5
1 Represent a simple digital system as a block diagram, showing input, processing and output stages
2 Understand that a block diagram shows the flow of information through a system
3 Understand that block diagrams make it easier to analyse the operation of a system
4 Analyse and synthesise circuit and block diagrams for digital systems with only one logic gate

1.2.1
1 Recall the transfer characteristic of an LDR (resistance falls as light intensity increases) and represent this as a resistance-intensity graph
2 Recall the transfer characteristic of a thermistor (resistance falls as temperature increases) and represent this as a resistance-temperature graph
3 Recall and use the equation for the resistance of resistors in series (\\(R = R_1 + R_2\\)) and parallel
4 Calculate the output voltage of an unloaded voltage divider made from a pair of resistors in series with a power supply
5 Understand the use of a potentiometer to generate a signal of variable voltage
6 Understand the different between analogue and digital signals (analogue have any value, digital have just two)

1.2.2
1 Recall the transfer characteristic of an open-loop op-amp operating from supply rails at \\(\SI{+15}{\volt}\\) and \\(\SI{-15}{\volt}\\) (output saturates at \\(\SI{+13}{\volt}\\) if non-inverting input higher than inverting input, otherwise output saturates at \\(\SI{-13}{\volt}\\))
2 Understand that an ideal op-amp can be modelled as having no current at its inputs, but able to source or sink currents of up to \\(\SI{10}{\milli\ampere}\\)
3 Understand the use of a diode in series with resistors to convert the output of an op-amp into high and low signals for a logic system
4 Recall the transfer characteristic for a diode and represent it as a current-voltage graph (no current in reverse bias; current rises rapidly in forward bias when the voltage reaches \\(\SI{0.7}{\volt}\\))
5 Understand the use of a zener diode in series with a resistor to generate a fixed voltage at one of the inputs of an op-amp
6 Recall the transfer characteristic for a zener diode and represent it as a current-voltage graph (no current in reverse bias until the breakdown voltage; current rises rapidly in forward bias when voltage reaches \\(\SI{0.7}{\volt}\\))
7 Analyse and synthesise sensor systems with digital outputs for position, light intensity and temperature

1.2.3
1 Recall the exponential change in voltage across a capacitor as it is charged or discharged from a constant voltage through a resistor, and represent it as a voltage-time graph
2 Recall and use the equation for time constant (\\(\tau = RC\\))
3 Recall and use the idea that the voltage across the resistor of an RC series circuit is halved in a time of \\(0.7\tau\\)
4 Understand the use of a capacitor to delay the change of signal caused by the closing or opening of a switch in series with a resistor

1.3.1
1 Understand the use of an RC network to generate spikes from rising or falling edges, representing them as voltage-time graphs at input and output (exponential drop lasts about two time constants)
2 Understand the use of diodes as clamps to suppress spikes from RC networks
3 Understand the use of a pair of NAND gates and an RC network to make a monostable the output of which goes low for \\(\SI{0.7RC}{\second}\\) when triggered by a falling edge
4 Recall that inputs to logic gates draw no current and have clamping diodes to the supply rails
5 Sketch voltage-time graphs at inputs and outputs of the logic gates in a monostable

1.3.2
1 Recall the transfer characteristic of a Schmitt trigger NOT gate and represent it as an input-output graph (no recall of trip point values required)
2 Understand the use of an RC network and Schmitt trigger NOT gate to make an oscillator and sketch voltage-time graphs at input and output (period \\(T = 0.5RC\\))
3 Understand how to use an oscilloscope to observe voltage that vary with time (including use of timebase and vertical amplifier settings to measure amplitude and period)
4 Recall and use the equation for frequency (\\(f = \frac{1}{T}\\))
5 Understand the use of a driver to provide the interface between an oscillator and a loudspeaker

1.4.1
1 Understand the use of truth tables to analyse the behaviour of logic systems with up to three inputs
2 Recall and use Boolean algebra to represent the output of logic gates
3 Recall and use Boolean algebra to represent the output columns of a truth table
4 Understand the construction of a truth table from a Boolean algebra expression
5 Understand the use of Boolean algebra to represent the behaviour of a logic system (including the use of the rules given in Appendix B to simplify expressions)
6 Synthesise AND, OR and NOT gates from NAND gates
7 Understand the use of NAND gates to synthesise logic systems with up to four inputs
8 Understand the advantages of only using NAND gates (more economic use of integrated circuits, economies of scale)
9 Analyse the behaviour of logic systems with up to four inputs and four outputs

2.1.1
1 Recall the behaviour of a bistable (separate inputs to set and reset a single output) and represent its behaviour with timing diagrams
2 Understand the use of NOR gates to make a bistable with active-high inputs
3 Understand the use of NAND gates to make a bistable with active-low inputs
4 Recall the behaviour of a latch (data and enable inputs to set and reset a single output) and represent its behaviour with timing diagrams
5 Analyse the operation of a latch made from logic gates and a bistable
6 Recall the behaviour of a rising-edge triggered D flip-flop (data, clock, set and reset inputs, complementary outputs) and represent its behaviour with timing diagrams
7 Analyse the operation of a D flip-flop made from a master-slave pair of latches
8 Understand the use of an array of D flip-flops to store a binary word

2.2.1
1 Recall the use of an electret microphone to transfer sounds into electrical signals, to include the use of a pull-up resistor and a coupling capacitor
2 Understand that an ideal amplifier increases the amplitude of an ac signal without altering its frequency or shape
3 Recall and use the equation for voltage gain (\\(G = \frac{V_{out}}{V_{in}}\\))
4 Recall that an op-amp is a differential amplifier (\\(V_{out} = A(V_+ - V_-)\\)) with a very large open-loop gain A
5 Understand the use of negative feedback to make an op-amp into a voltage follower, including the need for a pull-down resistor at the non-inverting input
6 Understand that a voltage follower has a voltage gain of one but can provide power gain

2.2.2
1 Understand the use of feedback and pull-down resistors to make an op-amp into a non-inverting amplifier with a known voltage gain (\\(G = 1 + \frac{R_f}{R_d}\\))
2 Understand the use of feedback and input resistors to make an op-amp into an inverting amplifier with a known voltage gain (\\(G = -\frac{R_f}{R_{in}}\\)), to include the concept of virtual earth for the inverting input
3 Recall the transfer characteristic of inverting and non-inverting amplifiers based on op-amps, and represent them as input-output graphs, including saturation
4 Understand the use of feedback and input resistors to allow an op-amp to combine two or more different ac signals (\\(-\frac{V_{out}}{R_f} = \frac{V_1}{R_1} + \frac{V_2}{R_2}...\\))
5 Recall that resistors in op-amp amplifiers need to be in the range \\(\SI{1}{\kilo\ohm}\\) to \\(\SI{10}{\mega\ohm}\\)

2.3.1
1 Understand the connection of D to \\(\overline Q\\) to make a D flip-flop into a one-bit counter
2 Understand the use of D flip-flops and a NOT gate to make a binary ripple up-counter
3 Understand the use of logic gates to make binary counters that reset to m after n counts, where m and n are integers
4 Recall and use timing diagrams to represent the transfer characteristic of a binary counter
5 Recall the use of decoders and seven segment LEDs to display the output of a binary counter in decimal

2.3.2
1 Understand the use of binary counters to make systems that can be used as clocks, including the use of crystal oscillators for precision timing
2 Understand the use of oscillators, logic systems and binary counters to generate continuous sequences of digital signals, to include frequency division
3 Understand the use of a flip-flop, oscillators, logic systems and binary counters to generate a single train of pulses when triggered by a pulse

2.4.1
1 Explain the operation of a complete audio amplifier system in terms of blocks representing voltage amplifier, volume and tone controls and power amplifiers
2 Recall and use the concepts of output and input impedance to solve problems of power and signal transfer between subsystems
3 Understand the use of a potentiometer as a volume control

2.4.2
1 Explain the use of a capacitor as a frequency dependant impedance, with impedance decreasing with increasing frequency
2 Recall and use the equation for break frequency (\\(f_0 = \frac{1}{2\pi RC}\\)) in bass cut and treble cut filters
3 Recall the transfer characteristics of simple passive filters and represent them with log-log gain-frequency graphs, using straight line approximations
4 Understand treble cut, bass cut and bandpass filters based on op-amps, including the use of log-log gain-frequency graphs to represent their transfer characteristics

2.5.1
1 Describe a microcontroller as a digital system whose transfer characteristics are decided by the program stored in its memory
2 Understand the difference between hardware and the software that controls it
3 Understand the advantages of programmable systems (economies of scale, reusable, ease of systems design)
4 Understand the limitations of programmable systems (digital only, relatively slow)
5 Understand the need for a host computer to translate a program into machine code and download it into a microcontroller

2.5.2
1 Understand the meaning of the terms input port, output port, memory address and register in the context of a microcontroller system
2 Understand that an analogue-to-digital converter outputs a byte that represents the input voltage
3 Recall and use flowcharts to analyse and design simple programs for microcontrollers, using the symbols of Appendix C
4 Understand the use of hexadecimal notation to summarise four-bit binary words and bytes

4.1.1
1 Recall the transfer characteristics of an n-channel MOSFET, representing them as graphs of drain current against gate-source voltage and drain current against drain-source voltage (including the use of threshold voltage and transconductance)
2 Understand the use of a MOSFET as a voltage-controlled resistor for small drain-source voltages
3 Understand the use of MOSFETs in a voltage divider circuit to make a potentiometer whose wiper position is controlled by an external voltage
4 Understand the use of MOSFETs in analogue switches, multiplexers and tristates
5 Understand the use of MOSFETs as voltage followers with very high input impedance (including the use of coupling capacitors to inject and extract signals)
6 Understand the use of MOSFETs as high input impedance voltage amplifiers, including the need for biasing with a voltage divider to place the drain at a suitable voltage
7 Recall and use the equation for voltage gain (\\(G = -g_mR_d\\)) of a MOSFET amplifier
8 Recall the use of drain bias for a MOSFET amplifier (including why this is better than biasing with a voltage divider)

4.2.1
1 Recall the block diagram for a memory module (to include data bus, address bus and control bus)
2 Understand that memory module stores information as binary words (one bit per cell), including how the number of data lines is related to the word length
3 Recall the relationship between the number of address lines and the number of different locations in the memory module
4 Understand that the control bus contains active-low read, write and enable lines
5 Recall the sequence of operations required for a word to be written to, and read from a location in a memory module

4.2.2
1 Recall the distinction between volatile and non-volatile memory
2 Understand the use of a D flip-flop and a tristate to make a volatile memory cell
3 Understand the use of a capacitor and a MOSFET to make a non-volatile memory cell
4 Understand the use of tristates to allow more than one memory module to access a common data bus
5 Understand the use of multiplexers and logic gates to combine small memory modules into large ones

4.2.3
1 Recall the use of D flip-flops to assemble registers
2 Understand the use of registers and logic systems (such as full adders) in the parallel processing of pairs of binary words
3 Recall the use of two's complement coding to represent decimal numbers in binary code
4 Recall the use of AND and EOR gates to combine pairs of binary words stored in shift registers

4.3.1
1 Understand the difference between open- and closed-loop control systems
2 Understand the operation of on-off servo control systems in terms of the following blocks: sensor, reference, comparator, switch, transducer
3 Understand circuits for the on-off control of temperature, position, motor speed and light intensity (based on components studied at AS)
4 Understand the use of voltage-time graphs to represent the response of an on-off control system to changes of conditions
5 Recall that on-off control results in a rapid response to change, but that the output never settles to a constant value

4.3.2
1 Understand the operation of proportional servo control systems in terms of the following blocks: sensor, reference, difference amplifier, voltage amplifier, ramp generator, power amplifier, transducer
2 Understand the use of an op-amp and four identical resistors to make a difference amplifier
3 Understand the use of an op-amp to make a ramp generator, including the use of the equation \\(\Delta V_{out} = -V_{in}\frac{\Delta t}{RC}\\)
4 Understand the use of voltage-time graphs to represent the response of a proportional control system to changes of conditions
5 Recall that proportional control systems respond relatively slowly, but allow the sensor and reference to settle at the same value

4.3.3
1 Understand the use of a diode bridge and a capacitor to produce an unstabilised dc voltage from an ac supply
2 Understand the operation of a switched-mode power supply in terms of the following blocks: switched oscillator, transformer, rectifier, smoother, comparator, reference (including the use of opto-isolators to switch the oscillator on and off)
3 Understand the operation of a dc voltage regulator in terms of the following blocks: reference, comparator, MOSFET follower

4.4.1
1 Understand the operation of a microcontroller system in terms of the following blocks: CPU, memory, input port, output port, clock, reset
2 Understand the use of the address, data and control bus to transfer data between the CPU and memory, input ports and output ports
3 Understand the use of the following registers in the CPU: program counter, stack pointer, general purpose registers
4 Recall the use of tristates and D flip-flops to contruct input and output ports
5 Understand how in each machine cycle the CPU fetches an instruction from the memory and executes it, including changes in the contents of its registers
6 Understand the changes in the program counter when jump instructions are executed
7 Recall why the program counter is reset when the CPU's reset pin is activated
8 Understand that programs are stored in memory as hexadecimal code produced by compilers from programs written in other languages such as assembler and C

4.4.2
0 Understand the instruction set given in Appendix E to:
1 Loop until a required condition at the input port is met, including the use of the AND operation for selective resetting of bits (masking)
2 Provide a time delay by counting down in a register until it reaches 0
3 Fetch a byte from a look-up table and copy it to the output port
4 Use the EOR operation to selectively invert bits in the acccumulator
5 Process a byte at the input port to generate an address for a look-up table
6 Shift bytes in the accumulator to the left or right
7 The use of conditional and unconditional jumps, including the need for relative addressing
8 Call and return from subroutines, using registers to transfer information

4.4.3
1 Recall that the stack is an area of memory for storing the contents of the program counter on a last-in, first-out (LIFO) basis
2 Understand the changes in the stack pointer and program counter when calling and returning from subroutines
3 Understand the advantages of designing programs from subroutines
4 Use the instruction set given in Appendix E to write subroutines, using registers to transfer data to and from the main program

5.1.1
1 Recall that video screens display colour pictures as lines of pixels in a frame, with separate red, green and blue pixels
2 Recall that the intensity of each pixel in a computer monitor is controlled by an analogue signal
3 Understand the need for raster scans, line synchronisation signals and frame synchronisation signals
4 Recall that the separate signals for red, green, blue, line sync and frame sync pass from a computer to a monitor
5 Understand that the frame refresh rate has to be about 25 Hz for a flicker-free moving image
6 Recall how to calculate the bandwidth required for a monitor cable from the refresh rate and the number of pixels per frame
7 Understand that a binary word can be used to determine the intensity of a pixel, including the relationship between the word length and the number of intensity level
8 Recall how to calculate the bit rate required for a digital video stream from the bits per pixel, pixels per frame and the frame refresh rate
9 Understand that the bandwidth required for a digital video stream is half the bit rate
10 Recall that compression of a digital image reduces the bits per frame but may result in a loss of quality

5.2.1
1 Understand that amplitude modulation (AM) requires the amplitude of the carrier to carry information about the instantaneous voltage of the signal
2 Understand the use of a variable gain amplifier to produce AM carriers
3 Recall how to construct voltage-time and amplitude-frequency graphs of AM carriers (including the presence of sidebands on either side of the carrier)
4 Understand the use of a rectifier and filter (diode detector) to recover a signal from an AM carrier
5 Recall and use the rule that the bandwidth required for an amplitude modulated signal is twice the maximum signal frequency

5.2.2
1 Understand that frequency modulation (FM) requires the frequency of the carrier to carry information about the instantaneous voltage of the signal
2 Understand the use of a variable frequency oscillator to produce FM carriers
3 Understand the use of a monostable and treble cut filter for frequency demodulation
4 Recall how to construct voltage-time graphs of frequency modulated carriers
5 Recall and use the rule that the bandwidth required for an FM carrier is about five times the maximum frequency of the signal

5.2.3
1 Understand that the mark-space ratio of a pulse-width modulated (PWM) carrier is determined by the instantaneous voltage of the signal
2 Understand the use of a triangle waveform generator and a comparator to produce PWM carriers
3 Understand the operation of an op-amp ramp generator and an op-amp non-inverting Schmitt trigger to make a triangle waveform generator (including calculations of trip points and rate rates from component values)
4 Understand the need to sample the signal at least twice in each cycle (Nyquist criteria)
5 Understand the use of a treble cut filter to demodulate a PWM carrier
6 Recall and use the rule that the bandwidth of a PWM carrier is about half the highest frequency present in the carrier

5.2.4
1 Recall that modulated carriers can be transmitted as electrical signals along cables, as infrared along optical fibre or as radio waves
2 Understand that the intensity of a modulated carrier decreases with increasing distance of transmission (no quantitative details required)
3 Understand that noise is a random signal that is added to modulated carriers in transmission
4 Understand that interference is a signal from another carrier that is added to modulated carriers
5 Understand the relative susceptibility of twisted-pair cables, optical fibres and radio waves to noise and interference
6 Understand the meaning of signal-to-noise ratio (no quantitative details required)
7 Understand the use of limiters/Schmitt triggers to remove noise and interference from FM and PWM carriers, including that this is not possible for AM carriers

5.3.1
1 Understand that frequency division multiplexing (FDM) allocates a different range of frequencies (channel) for each modulated carrier
2 Understand how the maximum number of channels in a link is related to its bandwidth and the bandwidth allocated to each channel
3 Recall the use of a parallel LC circuit and a resistor as a bandpass filter (including the effect on the bandwidth of increasing the resistance in the parallel LC circuit)
4 Recall and use the equations for the reactance of an inductor (\\(X_L = 2\pi fL\\)) and a capacitor (\\(X_C = \frac{1}{2\pi fC}\\)), including the use of log-log plots of reactance against frequency to represent these characteristics
5 Recall and use the equation for the resonant frequency (\\(f_0 = \frac{1}{2\pi\sqrt{\strut LC}}\\))
6 Understand the use of three stacked filters to make a bandpass filter with a flat top and sharp edges, including the need for buffer amplifiers between stages

5.3.2
1 Understand the use of a tuned circuit at the base of an aerial to select a modulated carrier from just one broadcast channel
2 Recall that increasing the resistance in parallel with the tuned circuit increases the signal and reduces its bandwidth
3 Recall the operation of a simple AM radio receiver in terms of the following blocks: aerial, tuned circuit, rf amplifier, diode demodulator, af amplifier, loudspeaker
4 Understand that the selectivity of a radio receiver is its ability to reject modulated carriers from neighbouring channels
5 Understand that the sensitivity of a radio receiver is its ability to pick up weak stations
6 Understand the operation of a superhet radio receiver in terms of the following blocks: aerial, tuned circuit, local oscillator, mixer, if filter, if amplifier, demodulator, af amplifier, loudspeaker

5.4.1
1 Understand the operation of a digital transmission system in terms of the following blocks: analogue-to-digital converter (ADC), parallel-to-serial converter (PSC), serial-to-parallel converter (SPC), digital-to-analogue converter (DAC)
2 Understand that an ADC represents the signal voltage of each sample as a binary word, with the sampling rate at least twice the maximum signal frequency
3 Understand the meaning of the terms range, resolution and sample rate as applied to ADCs
4 Understand the operation of flash ADCs made from comparators and logic gates
5 Recall the use of summing amplifiers as DACs, including calculating the range and resolution from the resistor values
6 Understand the operation of an ADC made from a binary counter, a comparator and a DAC, including its advantages and disadvantages compared with a flash converter
7 Understand how time-division multiplexing (TDM) allows many channels to share the same link
8 Understand that the bandwidth required for TDM is half the total bit rate
9 Understand the use of multiplexers and demultiplexers in TDM

5.4.2
1 Understand that computers can exchange information with each other along a twisted-pair cable by packets of serial digital signals
2 Understand that each packet contains the following information: the source address, the destination address, the data payload, checksum
3 Understand the use of analogue switches to allow many systems to place signals on a single link in turn
4 Recall that each computer waits until there is no traffic on the cables before it attempts to transmit a packet
5 Understand the need for start (0) and stop (1) bits at the start and end of each packet
6 Understand the use of D flip-flops and logic gates to construct parallel-in serial-out (PISO) and serial-in parallel-out (SIPO) shift registers
7 Understand the use of shift registers in PTS and STP converters, including the need to use crystal oscillators
8 Recall that the bandwidth of the cable is half the maximum bit rate
