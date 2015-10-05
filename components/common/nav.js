import React from 'react';
import { NavLink } from 'fluxible-router';


if (process.env.BROWSER) {
  require('./nav.scss');
}


class Nav extends React.Component {
  render() {
    const selected = this.props.selected;
    const links = this.props.links;

    const linkHTML = Object.keys(links).map((name) => {
      var className = '';
      var link = links[name];

      if (selected === name) {
        className = 'pure-menu-selected';
      }

      // TODO(dbow): Remove - this is just a demo of NavLink with params.
      var navParams = {};
      if (link.page === 'street') {
        navParams = {frame: '5'};
      }

      return (
        <li className={className} key={link.path}>
          <NavLink routeName={link.page} navParams={navParams} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
        </li>
      );
    });

    return (
      <ul className="pure-menu pure-menu-open pure-menu-horizontal">
        {linkHTML}
      </ul>
    );
  }
}

Nav.defaultProps = {
  selected: 'intro',
  links: {},
};


export default Nav;

