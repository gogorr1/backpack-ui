# Change log

## v1.3.0
- [new] Install storybook-addon-knobs, update storybook ([#68](https://github.com/lonelyplanet/backpack-ui/pull/68))
- [update] Change default `tracking` value from an empty string to “normal” to be
consistent with other props in Heading component ([#68](https://github.com/lonelyplanet/backpack-ui/pull/68))
- [new] Create SocialShareContainer component which is responsible for containing data and events for social sharing components ShareMenu and SocialShare ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Create SocialIconButton component; used in SocialShare component ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Create SocialShare component ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [update] Update ShareMenu component and move logic for social links and pop-up windows out; use SocialShareContainer ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [new] Add colors to setting for Facebook Messenger and Reddit social networks ([#67](https://github.com/lonelyplanet/backpack-ui/pull/67))
- [update] Add `size` prop to ListItemNews component with small and medium sizes ([#66](https://github.com/lonelyplanet/backpack-ui/pull/66))
- [new] Add Facebook Messenger and Reddit icons ([#65](https://github.com/lonelyplanet/backpack-ui/pull/65))
- [update] Reduce stroke width on MouseOutline icon ([#65](https://github.com/lonelyplanet/backpack-ui/pull/65))

## v1.2.3
- [new] Add mouse-outline icon ([#64](https://github.com/lonelyplanet/backpack-ui/pull/64))

## v1.2.2

- [new] Add TravelAlert component ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add Logo component ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add logo icon ([#63](https://github.com/lonelyplanet/backpack-ui/pull/63))
- [new] Add mouse icon ([#62](https://github.com/lonelyplanet/backpack-ui/pull/62))
- [new] Add MIT license ([#61](https://github.com/lonelyplanet/backpack-ui/pull/61))
- [fix] Add prepublish script to run build script; fixes a bug where `dist` folder wouldn't be updated with new components ([#60](https://github.com/lonelyplanet/backpack-ui/pull/60))

## v1.2.1
- [update] Update Newsletter styles ([#59](https://github.com/lonelyplanet/backpack-ui/pull/59))

## v1.2.0
- [update] Update FeaturedCallout ([#58](https://github.com/lonelyplanet/backpack-ui/pull/58))
  - Move `position: relative` onto styles.container; previously this rule was being passed in via the `style` prop
  - Update heading spacing styles
  - Remove `width` prop
- [update] Add `constrained` prop and styles to FeaturedArticle to constrain width and height ([#58](https://github.com/lonelyplanet/backpack-ui/pull/58))
- [new] Add GridRow and GridColumn components ([#57](https://github.com/lonelyplanet/backpack-ui/pull/57))
- [new] Create new components using styled-components for Travel News app ([#56](https://github.com/lonelyplanet/backpack-ui/pull/56))
  - AuthorName
  - ItalicText
  - Author
  - Timestamp
  - NewsArticleAuthor

## v1.1.4
- [fix] Fix font color for CategoryLabel and CalloutLink components in FeaturedCallout ([#55](https://github.com/lonelyplanet/backpack-ui/pull/55))

## v1.1.3
- [update] Update CategoryLabel component; simplify component, use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create SponsorLabel and CategoryLabelLink components; based off of CategoryLabel ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [update] Update CalloutLink component; use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [update] Update CategoryLabel and CalloutLink components in FeaturedCallout to use `children` prop ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create ArticlePreview component ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))
- [new] Create RecommendedArticles component ([#54](https://github.com/lonelyplanet/backpack-ui/pull/54))

## v1.1.2
- [new] Add ListContainer, NewsList components ([#53](https://github.com/lonelyplanet/backpack-ui/pull/53))

## v1.1.1
- [new] Add CONTRIBUTING.md ([#52](https://github.com/lonelyplanet/backpack-ui/pull/52))
- [update] Update README.md; change "usage" section to reflect recommended method to import components, change heading hierarchy ([#52](https://github.com/lonelyplanet/backpack-ui/pull/52), [#51](https://github.com/lonelyplanet/backpack-ui/pull/51))
- [update] Add missing imports to src/index.js so components can be imported like `import { Button } from backpack-ui;`, despite this not being the recommended method of importing components ([#51](https://github.com/lonelyplanet/backpack-ui/pull/51))
- [new] Add Newsletter component ([#50](https://github.com/lonelyplanet/backpack-ui/pull/50))

## v1.1.0
- [new] Add a group of new components ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))
  - CalloutLink
  - CategoryLabel
  - FeaturedArticle
  - FeaturedCallout
  - FeaturedSectionHeading
  - GradientOverlay
  - HeroImageContainer
  - HideAtBreakpoint
  - ListItemNews
  - ListItemThumbnail
  - PromotedGuidebook
  - SectionalNav
- [new] Install react-scroll and react-stickynode dependencies for SectionalNav component ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))
- [new] Add new color "crusta", hex `#ff882e` ([#49](https://github.com/lonelyplanet/backpack-ui/pull/49))

## v1.0.6
- [fix] Rename `link` prop to `url` and make it a string in IconCallout component ([#48](https://github.com/lonelyplanet/backpack-ui/pull/48))

## v1.0.5
- [new] Add `mouseenter` and `mouseleave` events as props to SightsListItem component ([#47](https://github.com/lonelyplanet/backpack-ui/pull/47))
- [new] Allow InteractiveMap component to receive props via `componentWillReceiveProps` to change active marker and add `activeMarker` prop ([#47](https://github.com/lonelyplanet/backpack-ui/pull/47))
- [fix] Remove relative link path for SightsListItem component ([#46](https://github.com/lonelyplanet/backpack-ui/pull/46))

## v1.0.4
- [fix] Adjust spacing, sizing for IconCalloutGroup component ([#45](https://github.com/lonelyplanet/backpack-ui/pull/45))

## v1.0.3
- [fix] Make icons in story more visible ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))
- [fix] Resize survival guide icons to use 32px viewbox instead of 1024px; this is consistent with all other icons ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))
- [new] Add survival guide icons for speech bubbles and passport ([#44](https://github.com/lonelyplanet/backpack-ui/pull/44))

## v1.0.2
- [fix] IconCallout component's text was overflowing its container in IE 11 due to flexbox layout. Flexbox was used in order to keep the MoreLink pinned to the bottom of the container, but that dependency is no longer being used and has been removed. ([#43](https://github.com/lonelyplanet/backpack-ui/pull/43))
- [fix] Fix some linting errors in InteractiveMap component by setting some methods to static and re-ordering source order of methods ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))
- [new] Give InteractiveMap container's a max-width of 100%; use colors from settings ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))
- [new] Add `style` prop to InteractiveMap component ([#42](https://github.com/lonelyplanet/backpack-ui/pull/42))

## v1.0.1
- [fix] Suppress Radium warning in NumberMarker component ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))
- [new] Add letter spacing to Button and MoreLink components ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))
- [new] Add `xSmall` size to NumberMarker component ([#41](https://github.com/lonelyplanet/backpack-ui/pull/41))


## v1.0.0
- Remove alpha label from version
