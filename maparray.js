const finalParticipants = ["Yaylor" , "Donald" , "Don", "Natasha" , "Bobby"];

const announcements = finalParticipants.map ((Member) => {
    return Member + "joined the contest.";
});
console.log(announcements);