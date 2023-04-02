const movies = [{
    title: "Ginny & Georgia",
    overview: "Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.",
    poster_path: "https://occ-0-6422-1490.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVmCCUTXFZwvHR0BBkqbt1ea7TfIYZGgD_GtHQ7MefsXbNmJZot-rQtxsvjy7252FyAsmZ6xbAbSHqoL9TXNxCPYffqGThdKbFYg.jpg?r=977" 
}, {
    title: "Sex/Life",
    overview: "A suburban mother of two takes a fantasy-charged trip down memory lane that sets her very married present on a collision course with her wild-child past.",
    poster_path: "https://occ-0-3212-299.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcHOnc3fjVP3diaJg-iIqpO2mLSLMWw2oDoY5oI_QHIeftVFrd8C8MV2qThgpW1G-MF2dcRArptuhxtw1kB_zK8YXYGdPaWvXSOz.jpg?r=2bd"
}, {
    title: "Kaleidoscope",
    overview:"A master thief and his crew attempt an epic and elaborate heist worth $7 billion dollars — but betrayal, greed and other threats undermine their plans.",
    poster_path:"https://occ-0-299-1567.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYCDhs58-Z4NJLqWH7GQH3ycUoeUtVhLSwxZ3GKZFhH_V0lWRh8Kp98GxdDJgXUUQNZWyMRFa4gl8vnRs_1jI4grlOU-lYOaqRes.jpg?r=078"
}, {
    title:"Wednesday",
    overview: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    poster_path: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQaftQE9dUgKNI_K8r2Qre8OfICBVsosZZsvvwu0DyTqwQ4ABjNWCfoTfPyGDoyEvzWSuzuTeuaL0h1pDbi2XLJx3eyWClaIt6NWYSbPzWbTXnowvwGYvjkJgJ53m4FG9gHNUmGdWZJPWXDwqsMDjo09e5Xc.jpg?r=a26"
}, {
    title: "Vikings: Valhalla",
    overview: "Follow-up series to 'Vikings' set 100 years afterward and centering on the adventures of Leif Erikson, Freydis, Harald Hardrada and the Norman King William the Conqueror.",
    poster_path: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSMcH7d0gQjQ7W5mJmJNGAw6fzlWzoHeohNtmmbcFx6GA2gaWkX6qmIx7mJSOqk7y0t9sNfdzePXYTKqhDnZjjzPj1fhK9PD3og9JAH4NWAyQ_JUmPFzc0yUcV6he_IYdKJzz97ULbOVVGACnP6SmlxDv34.jpg?r=ca3"
}, {
    title: "The Witcher: Blood Origin",
    overview: "More than a thousand years before the events of 'The Witcher,' seven outcasts in an Elven world join forces in a quest against an all-powerful empire.",
    poster_path: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-witcher-blood-origin-poster-featured.jpeg"
}, {
    title: "1899",
    overview: "Multinational immigrants traveling from the old continent to the new encounter a nightmarish riddle aboard a second ship adrift on the open sea.",
    poster_path: "https://occ-0-1001-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSJN7VFIzMx1sD5NtSs2ToX73dCGyo4c_K4vtFuCDzo977inm5ohT-LDTDVYDqf8vi7bjrR0Hib8gTa93fK2JlS1lddnR2jq-iQH.jpg?r=496"
}, {
    title: "Elite",
    overview:"When three working-class teens enroll in an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
    poster_path: "https://occ-0-6422-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVje3uqqxgYAdDpjZ70JWApXwIdv3JVzFkar0BYvSGomALuLCfTlCOCKjdb0ypfY6iMvfPkALogO9CQSyO-KmNY9xVI6yyG8XzFG.jpg?r=993"
}, {
    title: "Glass Onion: A Knives Out Mystery",
    overview: "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
    poster_path: "https://occ-0-6422-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSUFwM8fnle0ePDag-OAMz8GDGJKdD4aIeb7J6sEcY-fELNlhrisM-tDYi4iQBzFf42MgarqU0N-R9QocltbGhr73FYve6fnIrgz.jpg?r=633"
}, {
    title: "The Pale Blue Eye",
    overview: "A retired detective recruits an astute West Point cadet named Edgar Allan Poe to help him solve a grisly murder mystery at the U.S. Military Academy.",
    poster_path:"https://occ-0-1348-1001.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABap0CO7quN_RXB-NcPv2el_bZrq0zrlTJTUTQNN3E_8KaIrg3vDd7zktuzoIQIKS8iiJkwGFDJWFV73pp0-l_dD7J8waxg-ootvW.jpg?r=eb8"
}]
export default movies