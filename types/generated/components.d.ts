import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainerFormContainer extends Schema.Component {
  collectionName: 'components_container_form_containers';
  info: {
    displayName: 'formContainer';
    icon: 'information';
  };
  attributes: {
    name: Attribute.String;
    form: Attribute.Relation<
      'container.form-container',
      'oneToOne',
      'api::form.form'
    >;
  };
}

export interface FormInput extends Schema.Component {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'input';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    fieldName: Attribute.Relation<
      'form.input',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
    type: Attribute.String;
    label: Attribute.String;
    placeholder: Attribute.String;
    suggestion: Attribute.String;
    style: Attribute.JSON;
    visibility: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface LayoutLayoutOrder extends Schema.Component {
  collectionName: 'components_layout_layout_orders';
  info: {
    displayName: 'layoutOrder';
    icon: 'bulletList';
  };
  attributes: {
    componentName: Attribute.String;
    position: Attribute.Enumeration<
      [
        'pos1',
        'pos2',
        'pos3',
        'pos4',
        'pos5',
        'pos6',
        'pos7',
        'pos8',
        'pos9',
        'pos10',
        'pos11',
        'pos12',
        'pos13',
        'pos14'
      ]
    >;
  };
}

export interface LayoutLayout extends Schema.Component {
  collectionName: 'components_layout_layouts';
  info: {
    displayName: 'layout';
    icon: 'layout';
    description: '';
  };
  attributes: {
    margin: Attribute.String;
    padding: Attribute.String;
    style: Attribute.JSON;
    layoutOrder: Attribute.Component<'layout.layout-order', true>;
    layoutType: Attribute.Relation<
      'layout.layout',
      'oneToOne',
      'api::form-field-name.form-field-name'
    >;
  };
}

export interface UiLogo extends Schema.Component {
  collectionName: 'components_ui_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
    altText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'container.form-container': ContainerFormContainer;
      'form.input': FormInput;
      'layout.layout-order': LayoutLayoutOrder;
      'layout.layout': LayoutLayout;
      'ui.logo': UiLogo;
    }
  }
}
