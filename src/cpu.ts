// Simulation of a MIPS32

enum InstructionTypes{R, I, J}

// will I really need this? 

class MIPSInstruction {
    protected format:InstructionTypes; // binary instruction format
    protected mnemonic: string; // assembly mnemonic (instruction name)
    
    //field present in all instructions
    protected opcode: number;

    //fields present in R and I instructions
    protected rs: number;
    protected rt: number; 
    
    // fields present only in R instructions
    protected rd: number; 
    protected shamt: number;
    protected funct: number;

    // field present only in I instructions
    protected immediate: number; 

    // field present only in J instructions
    protected const: number;

    constructor(format:InstructionTypes, mnemonic:string, opcode:number) {
        this.format = format;
        this.mnemonic = mnemonic;
        this.opcode = opcode
    }
}

export class MIPS32 {
    private REGISTER_BANK:Array<number> = Array<number>(31); // 31 32-bit programmable register
    private pc: number; // program counter, invisible 32 bit register (also known as instruction pointer)
    private state;
    private memory:Array<number>;
    constructor(starting_PC:number = 0x00400000) {
        this.pc = starting_PC;
        this.state = MIPS32.execution_states.instruction_fetch;
    }
    // starts the state machine
    start_execution() {
        
    }
    
}

export namespace MIPS32 {
    export enum execution_states {
        instruction_fetch, register_read, ALU_operation, data_access, register_write
    }
}