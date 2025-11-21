const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ageMayor = ages.filter(age => age > 18);
console.log(ageMayor);

const agePar = ages.filter(age => age % 2 === 0);
console.log(agePar);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayer = streamers.filter(streamer =>streamer.gameMorePlayed === 'League of Legends');
console.log(lolPlayer);

const uName = streamers.filter(streamer => streamer.name.includes('u'));
console.log(uName);

const legends = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => {
    if (streamer.age > 35) {
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
    }
    return streamer;
  });

console.log(legends);