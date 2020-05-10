class Forum {
    constructor(users, questions, id) {
        this.users = [];
        this.questions = [];
        this.id = 1;
        this.logged = [];
    }

    register(username, password, repeatPassword, email) {
        if (!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        if (this.users.find(x => x.email === email)) {
            throw new Error("This user already exists!");
        }

        this.users.push(
            {
                email,
                username,
                password,
            }
        );
        console.log(`${username} with ${email} was registered successfully!`);
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        if (!username || !password) {
            throw new Error("Input can not be empty");
        }

        const currentUsername = this.users.find(x => x.username === username);
        if (!currentUsername) {
            throw new Error("There is no such user");
        }

        if (currentUsername.password === password) {
            const user = {
                username: username,
                password: password,
            }
            this.logged.push(user);
            console.log("Hello! You have logged in successfully");
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        if (!username || !password) {
            throw new Error("Input can not be empty");
        }

        const currentUsername = this.logged.find(x => x.username === username);
        if (!currentUsername) {
            throw new Error("There is no such user");
        }

        if (currentUsername.password === password) {
            this.logged = this.logged.filter(x => x.username !== currentUsername);
            console.log("You have logged out successfully");
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        const currentUsername = this.logged.find(x => x.username === username);
        if (!currentUsername) {
            throw new Error("You should be logged in to post questions");
        }
        if (!question) {
            throw new Error("Invalid question");
        }

        const post = {
            id: this.id,
            username,
            'question': question,
            answers: [],
        }
        this.questions.push(post);
        this.id += 1;
        console.log("Your question has been posted successfully");
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {
        const currentUsername = this.logged.find(x => x.username === username);
        if (!currentUsername) {
            throw new Error("You should be logged in to post answers");
        }
        if (!answer) {
            throw new Error("Invalid answer");
        }

        const currentQuestion = this.questions.find(x => x.id === questionId);
        if (!currentQuestion) {
            throw new Error("Invalid question");
        }
        const ans = {
            username,
            answer,
        }
        currentQuestion.answers.push(ans);
        console.log("Your answer has been posted successfully");
        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let output = '';
        this.questions.forEach((questionId) => {
            const { id, username, question, answers } = questionId;
            output += `Question ${id} by ${username}: ${question}`;
            answers.forEach((ans) => {
                const { username, answer } = ans;
                output += `\n---${username}: ${answer}`;
            });
            output += `\n`;
        });
        debugger
        return output.trim();
    }
}


let forum = new Forum();
forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions())


