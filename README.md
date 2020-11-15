# Simple React Footer

Simple React Footer is an open-source React.js component. It is a ready to use footer for your application.

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
    resources={resources}
    linkedin={linkedin}
    facebook={facebook}
    twitter={twitter}
    instagram={instagram}
    youtube={youtube}
    pinterest={pinterest}
    copyright={copyright}
/>
```

## Pass in your data as props

| Prop | Type | Description |
| :---: | :---: | :---: |
| description | `String` | Required. This is description about your company or any other text you would like to include in the footer. The recommended length is up to 520 characters. |
| title1 | `String` | Required. This is the title above the description. This is an ideal place for a company name or "About" title. |
| title2 | `String` | Required. This is the title above the resources dropdown. |
| resources.name | `String` | Required. Parameter for a resource. This is a good place to include a link to another page. |
| resources.link | `String` | Required. Parameter for a resource. This is the place for a link to the resources.name page. |
| linkedin | `String` | Optional. Linkedin name. Only include the actual name of the linkedin page. Ex: `fluffycat/` |
| facebook | `String` | Optional. Facebook name. Only include the actual name of the facebook page. Ex: `catsfbpage/` |
| instagram | `String` | Optional. Instagram name. Only include the actual name of the instagram page. Ex: `fluffy_cat/` |
| twitter | `String` | Optional. Twitter name. Only include the actual name of the twitter page. Ex: `fluffy_cat_in_twitter/` |
| youtube | `String` | Optional. Youtube name. Include your youtube channel's path after `channel/`. Ex: `UCFt6TSF464J8K82xeA?/` |
| pinterest | `String` | Optional. Pinterest name. Only include the actual name of the pinterest page. Ex: `fluffy_cats_collections/` |
| copyright | `String` | Required. This is the copyright name. |


### Render might look like this
```
render() {
  const description: "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.",
  const title1: "About",
  const title2: "Resources",
  const resources: [
      {
          name: "About",
          link: "/about"
      },
      {
          name: "Careers",
          link: "/careers"
      },
      {
          name: "Admin",
          link: "/admin"
      },
      {
          name: "Contact",
          link: "/contact"
      },
 ],
 const copyright: "Anna Morozova",
 const linkedin: "fluffycat/",
 const facebook: "catsfbpage/",
 const twitter: "fluffy_cat_in_twitter/",
 const instagram: "fluffy_cat/",
 const pinterest: "fluffy_cats_collections/",
 const youtube: "UCFt6TSF464J8K82xeA?/"
};
```
