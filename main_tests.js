const expect = chai.expect;

describe('Week6_Functions', () => {
    describe('#getPlayerName', () => {
        it('Player name should be a String', () => {
            const testPlayer = new Player("Jeff");
            expect(testPlayer.getPlayerName()).to.be.a('string');
        });

        it('Test will pass if name is not a string', () => {
            const testPlayer2 = new Player("John");
            expect(testPlayer2.getPlayerName()).is.not.a('string');
        })
    })
})