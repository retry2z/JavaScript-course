class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.setId = clientId;
        this.setEmail = email;
        this.setFirstName = firstName;
        this.setLastName = lastName;
    }

    //Setting ID
    set setId(data) {
        // const pattern = /^[a-zA-z]{3,}$/g;
        const pattern = /^[0-9]{6}$/g;
        if (pattern.test(data)) {
            this.clientId = data;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }
    get getId() {
        return this.clientId
    }

    //Setting Email
    set setEmail(data) {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if (pattern.test(data)) {
            this.email = data;
        } else {
            throw new TypeError('Invalid e-mail');
        }
    }
    get getEmail() {
        return this.email
    }

    //Setting First Name
    set setFirstName(data) {
        const patternLength = /^.{3,20}$/g;
        if (!patternLength.test(data)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        const pattern = /^[a-zA-Z]+$/g;
        if (pattern.test(data)) {
            this.firstName = data;
        } else {
            throw new TypeError('First name must contain only Latin characters');
        }
    }
    get getFirstName() {
        return this.firstName
    }

    //Setting Last Name
    set setLastName(data) {
        const patternLength = /^.{3,20}$/g;
        if (!patternLength.test(data)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        const pattern = /^[a-zA-Z]+$/g;
        if (pattern.test(data)) {
            this.lastName = data;
        } else {
            throw new TypeError('Last name must contain only Latin characters');
        }
    }
    get getLastName() {
        return this.lastName
    }
}


const a = new CheckingAccount('131223', 'asd@asd.com', 'asdasds','aasds');


