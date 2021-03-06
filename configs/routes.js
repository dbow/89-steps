export default {
  intro: {
    path: '/',
    method: 'get',
    page: 'intro',
    title: 'The Introduction',
    handler: require('../components/scenes/intro'),
  },
  street: {
    path: '/street/:frame*',
    method: 'get',
    page: 'street',
    title: 'The Street',
    handler: require('../components/scenes/street'),
    action: (context, payload, done) => {
      var frame = payload.get('params').get('frame');
      console.log(frame);
      // TODO(dbow): Dispatch an action to set the frame here?
      done();
    },
  },
  stairs: {
    path: '/stairs',
    method: 'get',
    page: 'stairs',
    title: 'The Stairs',
    handler: require('../components/scenes/stairs'),
  },
  apartment: {
    path: '/apartment',
    method: 'get',
    page: 'apartment',
    title: 'The Apartment',
    handler: require('../components/scenes/apartment'),
  },
  listing: {
    path: '/listing',
    method: 'get',
    page: 'listing',
    title: 'The Listing',
    handler: require('../components/scenes/listing'),
  },
  part2: {
    path: '/part2',
    method: 'get',
    page: 'part2',
    title: 'Part 2',
    handler: require('../components/pages/part2'),
  },
  credits: {
    path: '/credits',
    method: 'get',
    page: 'credits',
    title: 'Credits',
    handler: require('../components/pages/credits'),
  },
};
