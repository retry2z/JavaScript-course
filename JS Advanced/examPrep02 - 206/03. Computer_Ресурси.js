class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];

    }

    installAProgram(name, requiredSpace) {
        const tmp = this.hddMemory - requiredSpace;
        if (tmp - requiredSpace < 0) {
            throw new Error("There is not enough space on the hard drive");
        }

        const newProgram = {
            name,
            requiredSpace,
        };
        this.hddMemory = tmp;
        this.installedPrograms.push(newProgram);

        return newProgram;
    }

    uninstallAProgram(name) {
        const tmp = this.installedPrograms.find(x => x.name === name);
        if (!tmp) {
            throw new Error('Control panel is not responding');
        }
        this.hddMemory += tmp.requiredSpace;
        this.installedPrograms = this.installedPrograms.filter(x => x.name !== name);

        return this.installedPrograms;
    }

    openAProgram(name) {
        const tmp = this.installedPrograms.find(x => x.name === name);

        const ramMemoryForProgram = (tmp.requiredSpace / this.ramMemory) * 1.5;
        const cpuUsage = ((tmp.requiredSpace / this.cpuGHz) / 500) * 1.5;
        const ram = this.taskManager.reduce((a, b) => a.ramUsage + b.ramUsage, 0) + ramMemoryForProgram;
        const cpu = this.taskManager.reduce((a, b) => a.cpuUsage + b.cpuUsage, 0) + cpuUsage;

        if (!tmp) {
            throw new Error(`The ${name} is not recognized`);
        }

        if (this.taskManager.find(x => x.name === name)) {
            throw new Error(`The ${name} is already open`);
        }

        if (ram >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (cpu >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        const task = {
            name: name,
            ramUsage: ramMemoryForProgram,
            cpuUsage: cpuUsage,
        }
        this.taskManager.push(task);

        return task;
    }

    taskManagerView() {
        if (!this.taskManager.length) return 'All running smooth so far';

        let output = '';
        this.taskManager.forEach(program => {
            output += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%\n`;
        });

        return output.trim();
    }
}

let computer = new Computer(4096, 7.5, 250000);
console.log(computer.taskManagerView());

// act
computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');
console.log(computer.taskManagerView());
