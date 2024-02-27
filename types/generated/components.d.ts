import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCover extends Schema.Component {
  collectionName: 'components_shared_covers';
  info: {
    displayName: 'Cover';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Image: Attribute.Media;
    Buttons: Attribute.Component<'elements.link-button', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Link: Attribute.Component<'elements.link-button'>;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface ElementsLinkButton extends Schema.Component {
  collectionName: 'components_elements_link_buttons';
  info: {
    displayName: 'LinkButton';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
    Theme: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cover': BlocksCover;
      'blocks.features': BlocksFeatures;
      'blocks.testimonials': BlocksTestimonials;
      'elements.link-button': ElementsLinkButton;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
