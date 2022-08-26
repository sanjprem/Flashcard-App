const cards = [
    {
        front: 'The "First Computer Programmer"',
        back: 'Ada Lovelace',
        flipped: false,
    },
    {
        front: 'Invented the "Clarke Calculator"',
        back: 'Edith Clarke',
        flipped: false,

    },
    {
        front: 'Famous World War II Enigma code breaker',
        back: 'Alan Turing',
        flipped: false,
    },
    {
        front: 'Created satellite orbit analyzation software for NASA',
        back: 'Dr. Evelyn Boyd Granville',
        flipped: false,
    },
];

// get info for new cards from the user
// create a method
// creates a new card object containing new card information
// pushed that card object in to the cards array
// add new card when user hits enter or clicks button
// delete cards
// animate card flip
// display an error message if form fields are blank
new Vue({
    el: '#flashcard-app',
    data: {
        cards: cards,
        newFront: '',
        newBack: ''
    },
    methods: {
        toggleCard: function (card) {
            card.flipped = !card.flipped;
        },
        addNew: function () {
            this.cards.push({
                front: this.newFront,
                back: this.newBack,
                flipped: false
            });
        }
    }
});