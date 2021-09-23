const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString(); 
    })

    describe("form", () => {
        let form;
        let greetingInput;
        let occasionInput;
        let messageInput;

        beforeEach(() => {
            form = document.querySelector('form');
            greetingInput = form.getElementById('greeting');
            occasionInput = form.getElementById('occasion');
            messageInput = form.getElementById('message');
            submitInput = form.getElementById('submit');
        });

        test("it exists", () => {
            expect(form).toBeTruthy();
        });

        describe("greeting input", () => {
            test("it has an id of 'greeting'", () => {
                expect(greetingInput.id).toBe("greeting");
            });

            test("it has an placeholder of 'Enter greeting'", () => {
                expect(greetingInput.getAttribute('placeholder')).toBe("Enter greeting");
            });
        });

        describe("occasion input", () => {
            test("it has an id of 'occasion'", () => {
                expect(occasionInput.id).toBe("occasion");
            });
        });
        
        describe("message input", () => {
            test("it has an id of 'message'", () => {
                expect(messageInput.id).toBe("message");
            });

            test("it has an placeholder of 'Enter message'", () => {
                expect(messageInput.getAttribute('placeholder')).toBe("Enter message");
            });
        });

    })




});