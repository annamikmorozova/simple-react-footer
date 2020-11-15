# Simple React Footer

Simple React Footer is an open-source React.js component. It is a ready to use footer for your React application.

## Preview

## Install

```
npm install simple-react-footer
```

## Import and use the Component

```
<Footer 
    description={description} 
    title1={title1}
    title2={title2}
    title3={title2}
    col2={col2}
    col3={col3}
    linkedin={linkedin}
    facebook={facebook}
    twitter={twitter}
    instagram={instagram}
    youtube={youtube}
    pinterest={pinterest}
    copyright={copyright}
/>;
```

## Pass in your data as props

   * `col2` is an array with objects where the parameter name is a `string` and the parameter link is a `string`.
   * `col3` is an array with objects where the parameter name is a `string` and the parameter link is a `string`.

| Prop | Type | Description |
| :---: | :---: | :---: |
| title1 | `String` | Required. This is the title for the first column. This is an ideal place for the company's name or "About" title. |
| description | `String` | Required. This is the description about your company or any other text you would like to include in the footer. The recommended length is up to 450 characters. |
| title2 | `String` | Optional. This is the title for the second column. |
| col2.name | `String` | Optional. Parameter for the `col2`. This is a place for a menu item under `title2`. |
| col2.link | `String` | Optional. Parameter for the `col2`. This is the link for the `col2.name`. |
| title3 | `String` | Optional. This is the title for the third column. |
| col3.name | `String` | Optional. Parameter for the `col3`. This is a place for a menu item under `title3`. |
| col3.link | `String` | Optional. Parameter for the `col3`. This is the link for the `col3.name`. |
| linkedin | `String` | Optional. Linkedin name. Only include the actual name of the linkedin page. Ex: `fluffycat/` |
| facebook | `String` | Optional. Facebook name. Only include the actual name of the facebook page. Ex: `catsfbpage/` |
| instagram | `String` | Optional. Instagram name. Only include the actual name of the instagram page. Ex: `fluffy_cat/` |
| twitter | `String` | Optional. Twitter name. Only include the actual name of the twitter page. Ex: `fluffy_cat_in_twitter/` |
| youtube | `String` | Optional. Youtube name. Include your youtube channel's path after `channel/`. Ex: `UCFt6TSF464J8K82xeA?/` |
| pinterest | `String` | Optional. Pinterest name. Only include the actual name of the pinterest page. Ex: `fluffy_cats_collections/` |
| copyright | `String` | Required. This is the copyright name. This could be the company's name or developer's name(s) |
| iconColor | `String` | Optional. This is the color of the social media icons. If not specified, the default color is black. |
| backgroundColor | `String` | Optional. This is the color of the footer's background. If not specified, the default color is bisque. |
| fontColor | `String` | Optional. This is the color of the font. If not specified, the default color is black. |


### Render might look like this
```
render() {
  const description: "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.",
  const title1: "About",
  const title2: "Resources",
  const title2: "Legal",
  const col2: [
      {
          name: "About",
          link: "/about"
      },
      {
          name: "Careers",
          link: "/careers"
      },
      {
          name: "Contact",
          link: "/contact"
      },
      {
          name: "Admin",
          link: "/admin"
      }
 ],
  const col3: [
      {
          name: "Privacy",
          link: "/privacy"
      },
      {
          name: "Terms",
          link: "/terms"
      }
 ],
 const copyright: "Anna Morozova",
 const linkedin: "fluffycat/",
 const facebook: "catsfbpage/",
 const twitter: "fluffy_cat_in_twitter/",
 const instagram: "fluffy_cat/",
 const pinterest: "fluffy_cats_collections/",
 const youtube: "UCFt6TSF464J8K82xeA?/",
 const iconColor: "black",
 const backgroundColor: "bisque",
 const fontColor: "black"
};
```


