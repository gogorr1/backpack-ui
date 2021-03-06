import React from "react";
import radium from "radium";
import capitalize from "lodash/capitalize";
import { color } from "../../../settings.json";
import Icon from "../icon";
import { blueLink } from "../../utils/mixins";
import schema from "../../utils/schema";
import font from "../../utils/font";

const _ = { capitalize };

const styles = {
  container: {
    base: {
      color: color.lightText,
      fontFamily: font("benton"),
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1,
    },
  },

  item: {
    padded: {
      marginRight: `${10 / 14}em`,
    },
  },

  anchor: {
    base: blueLink(),

    padded: {
      marginRight: `${10 / 14}em`,
    },
  },
};

const listMicroData = schema({
  itemType: "BreadcrumbList",
});

const itemMicroData = schema({
  itemProp: "itemListElement",
  itemType: "ListItem",
});

function linkMicroData(link) {
  if (link && link.type) {
    return schema({
      itemProp: "item",
      itemType: _.capitalize(link.type),
    });
  }

  return schema({
    itemProp: "item",
    itemType: "Thing",
  });
}

/**
 * Breadcrumb navigation component
 */
function Breadcrumbs({ links }) {
  const items = links.map((link, index) => (
    <span
      className="Breadcrumbs-item"
      style={[index !== links.length - 1 && styles.item.padded]}
      key={index}
      {...itemMicroData}
    >
      <a
        style={[
          styles.anchor.base,
          index < links.length - 1 && styles.anchor.padded,
        ]}
        href={`//www.lonelyplanet.com${link.href}`}
        key={index}
        {...linkMicroData(link)}
      >
        <span itemProp="name">{link.title}</span>
      </a>

      {index < links.length - 1 &&
        <Icon.ChevronRight
          width={`${6 / 14}em`}
          height={`${6 / 14}em`}
        />
      }

      <meta itemProp="position" content={index + 1} />
    </span>
  ));

  return (
    <nav
      className="Breadcrumbs"
      style={styles.container.base}
      {...listMicroData}
    >
      {items}
    </nav>
  );
}

Breadcrumbs.propTypes = {
  /**
   * An array of links for the navigation
   */
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      href: React.PropTypes.string,
      type: React.PropTypes.string,
    }),
  ).isRequired,
};

Breadcrumbs.defaultProps = {
  links: [],
};

Breadcrumbs.styles = styles;

export default radium(Breadcrumbs);
