const React = require('react');
const Loader = require('./src/components/Loader').default;

const Layout = require('./src/components/layout').default;

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log(props);
  return (
    <div {...props}>
      <Loader />
      <Layout>{element}</Layout>
    </div>
  );
};
