describe('On boarding app',()=>{
    beforeEach(()=>{
        cy.visit('localhost:3000');
    });
    it('render correctly',()=>{
        cy.get('button').should('exist');
        cy.get('h1').should('exist');
    });
    describe('account page',()=>{
        const emailValue = 'chris@gmail.com';
        const passwordValue = '12345678';
        const email = ()=>cy.get(':nth-child(1) > input');
        const password =()=>cy.get(':nth-child(2) > input');
        const terms =()=>cy.get(':nth-child(3) > input');
        const enterAccount = ()=>{
            email().type(emailValue);
            password().type(passwordValue);
            terms().click();
        };
        beforeEach(()=>{
            cy.get('button').click();
        });
        it('next disabled',()=>{
            cy.get('[href="/form/personalinfo"] > button').should('be.disabled');
        });
        it('account page renders correctly',()=>{
            email().should('exist');
            password().should('exist');
            terms().should('exist');
        });
        it('can enter input',()=>{
            enterAccount();
            email().should('have.value',emailValue);
            password().should('have.value',passwordValue);
            terms().should('have.value','on');
        });
        describe('personal page',()=>{
            const firstNameValue = 'Chris';
            const lastNameValue = 'Lau';
            const birthdateValue = '1991-12-01';
            const firstName = () =>cy.get(':nth-child(2) > input');
            const lastName = () =>cy.get(':nth-child(3) > input');
            const birthdate = () =>cy.get(':nth-child(4) > input');

            const goToPersonal =()=>{
                cy.get('[href="/form/personalinfo"] > button').click();
            };
            const enterPersonal =()=>{
                firstName().type(firstNameValue);
                lastName().type(lastNameValue);
                birthdate().type(birthdateValue);
            };
            beforeEach(()=>{
                enterAccount();
                goToPersonal();
            });
            it('next disabled',()=>{
                cy.get('[href="/form/sleep"] > button').should('be.disabled');
            });
            it('renders correctly',()=>{
                firstName().should('exist');
                lastName().should('exist');
                birthdate().should('exist');
            });
            it('can enter personal info',()=>{
                enterPersonal();
            });
            describe('sleep page',()=>{
                const hoursValue = '4';
                const bedtimeValue = '10';
                const back = ()=>cy.get('a > button');
                const hours =()=>cy.get('select');
                const bedtime =()=>cy.get('input');
                const enterSleep = ()=>{
                    hours().select(hoursValue);
                    bedtime().type(bedtimeValue);
                };
                const goToSleep =()=>{
                    cy.get('[href="/form/sleep"] > button').click();
                };
                const submit=()=>{
                    enterSleep();
                    cy.get('[type="submit"]').should('not.be.disabled');
                    cy.get('[type="submit"]').click();
                };

                beforeEach(()=>{
                    enterPersonal();
                    goToSleep();
                });
                it('submit disabled',()=>{
                    cy.get('[type="submit"]').should('be.disabled');
                });
                it('renders correctly',()=>{
                    back().should('exist');
                    hours().should('exist');
                    bedtime().should('exist');
                });
                it('can enter info',()=>{
                    enterSleep()
                    hours().should('have.value',hoursValue);
                    bedtime().should('have.value',bedtimeValue);
                });
                it('can submit',()=>{
                    submit();
                    cy.contains(`Name: ${firstNameValue} ${lastNameValue}`);
                    cy.contains('Email: '+emailValue).should('exist');
                });
            });
        });
    });
});