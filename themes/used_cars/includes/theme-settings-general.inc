<?php
/**
 * @file
 * General theme settings elements.
 */

use Drupal\Core\Form\FormState;
use Drupal\Core\Template\Attribute;
use Drupal\Core\Url;

/**
 * Alter the theme settings form to add our own settings.
 *
 * @param array $form
 *   The form array passed by reference.
 * @param FormState $form_state
 *   The form state array.
 */
function used_cars_form_system_theme_settings_alter(array &$form, FormState $form_state) {
  $form['ft_basic'] = array(
    '#type' => 'details',
    '#title' => t('Basic settings'),
    '#group' => 'used_cars_settings',
  );

  $form['favicon']['#prefix'] = _used_cars_theme_create_prefix(t('Shortcut icon settings'));

  $form['ft_basic']['theme_settings'] = $form['theme_settings'];
  $form['ft_basic']['logo'] = $form['logo'];
  $form['ft_basic']['favicon'] = $form['favicon'];

  unset($form['theme_settings']);
  unset($form['logo']);
  unset($form['favicon']);

  used_cars_theme_settings_general($form, $form_state);
}

/**
 * Setup the theme settings form.
 */
function used_cars_theme_settings_general(&$form, &$form_state) {
  _used_cars_theme_basic($form);
  _used_cars_theme_get_layout($form);
  _used_cars_theme_get_javascript($form);
  _used_cars_theme_get_metatags($form);
  _used_cars_theme_get_debuggers($form);
  _used_cars_theme_get_breadcrumb($form);
}

/**
 * Basic form fields.
 */
function _used_cars_theme_basic(&$form) {

}

/**
 * Layout form fields.
 */
function _used_cars_theme_get_layout(&$form) {

  $form['used_cars_settings']['link_settings'] = array(
    '#type'  => 'details',
    '#title' => t('Links settings'),
    '#group' => 'used_cars_settings',
  );

  $form['used_cars_settings']['link_settings']['body_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Body link'),
  );
  $form['used_cars_settings']['link_settings']['main_menu_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Main menu link'),
  );
  $form['used_cars_settings']['link_settings']['top_menu_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Top menu link'),
  );
  $form['used_cars_settings']['link_settings']['footer_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Footer link'),
  );
  $form['used_cars_settings']['link_settings']['body_link']['b_decor'] = array(
    '#type' => 'checkbox',
    '#title' => t('Body link decoration'),
    '#default_value' => theme_get_setting('b_decor', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['main_menu_link']['m_decor'] = array(
    '#type' => 'checkbox',
    '#title' => t('Main menu link decoration'),
    '#default_value' => theme_get_setting('m_decor', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['top_menu_link']['t_decor'] = array(
    '#type' => 'checkbox',
    '#title' => t('Top menu link decoration'),
    '#default_value' => theme_get_setting('t_decor', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['footer_link']['f_decor'] = array(
    '#type' => 'checkbox',
    '#title' => t('Footer link decoration'),
    '#default_value' => theme_get_setting('f_decor', 'used_cars'),
  );

  $form['used_cars_settings']['link_settings']['body_link']['b_decor_hover'] = array(
    '#type' => 'checkbox',
    '#title' => t('Body link decoration hover'),
    '#default_value' => theme_get_setting('b_decor_hover', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['main_menu_link']['m_decor_hover'] = array(
    '#type' => 'checkbox',
    '#title' => t('Main menu link decoration hover'),
    '#default_value' => theme_get_setting('m_decor_hover', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['top_menu_link']['t_decor_hover'] = array(
    '#type' => 'checkbox',
    '#title' => t('Top menu link decoration hover'),
    '#default_value' => theme_get_setting('t_decor_hover', 'used_cars'),
  );
  $form['used_cars_settings']['link_settings']['footer_link']['f_decor_hover'] = array(
    '#type' => 'checkbox',
    '#title' => t('Footer link decoration hover'),
    '#default_value' => theme_get_setting('f_decor_hover', 'used_cars'),
  );
}

/**
 * Javascript form fields.
 */
function _used_cars_theme_get_javascript(&$form) {
  $form['used_cars_settings']['social'] = array(
    '#type' => 'details',
    '#title' => t('Social Icon'),
    '#group' => 'used_cars_settings',
  );

  $form['used_cars_settings']['social']['show_hide_icon'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show Social Icon'),
    '#default_value' => theme_get_setting('show_hide_icon', 'used_cars'),
    '#description' => t("Check this option to show Social Icon. Uncheck to hide."),
  );

  $socmass = array(
    'twitter' => t('Twitter URL'),
    'facebook' => t('Facebook URL'),
    'flickr' => t('Flickr URL'),
    'linkedin' => t('Linkedin URL'),
    'youtube' => t('YouTube URL'),
    'pinterest' => t('Pinterest URL'),
    'google' => t('Google+ URL'),
    'dribbble' => t('Dribbble URL'),
    'vimeo' => t('Vimeo URL'),
    'instagram' => t('Instagram URL'),
    'vk' => t('Vk URL'),
  );

  foreach ($socmass as $key => $value) {
    $form['used_cars_settings']['social'][$key] = array(
      '#type' => 'textfield',
      '#title' => $value,
      '#default_value' => theme_get_setting($key, 'used_cars'),
    );
  }
}

/**
 * Meta tags form fields.
 */
function _used_cars_theme_get_metatags(&$form) {
  $form['used_cars_settings']['body_pattern'] = array(
    '#type' => 'details',
    '#title' => t('Body pattern'),
    '#group' => 'used_cars_settings',
  );

  $form['used_cars_settings']['body_pattern']['layout_pattern'] = array(
    '#type' => 'select',
    '#options' => array(
      'body_bg1' => t('Blue'),
      'body_bg2' => t('Lines'),
      'body_bg3' => t('Rhombus'),
      'body_bg4' => t('Noise'),
      'body_bg5' => t('Stone'),
      'body_bg6' => t('Сloth'),
      'body_bg7' => t('None'),
    ),
    '#title' => t('Select Pattern'),
    '#default_value' => theme_get_setting('layout_pattern', 'used_cars'),
  );
}

/**
 * Debugger form fields.
 */
function _used_cars_theme_get_debuggers(&$form) {
  $form['used_cars_settings']['copyfoot'] = array(
    '#type' => 'details',
    '#title' => t('Copyright'),
    '#collapsible' => TRUE,
    '#group' => 'used_cars_settings',
  );
  $form['used_cars_settings']['copyfoot']['show_hide_copyright'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show copyright text in footer'),
    '#default_value' => theme_get_setting('show_hide_copyright', 'used_cars'),
    '#description'   => t("Check this option to show copyright text in footer. Uncheck to hide."),
  );

  $form['used_cars_settings']['copyfoot']['copyright_developedby'] = array(
    '#type' => 'textfield',
    '#title' => t('Add name developed by in footer'),
    '#default_value' => theme_get_setting('copyright_developedby', 'used_cars'),
    '#description'   => t("Add name developed by in footer"),
  );
  $form['used_cars_settings']['copyfoot']['copyright_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Add link to developed by in footer'),
    '#default_value' => theme_get_setting('copyright_url', 'used_cars'),
    '#description'   => t("Add url developed by in footer. example: http://www.Ordasoft.com"),
  );
}

/**
 * Breadcrumb form fields.
 */
function _used_cars_theme_get_breadcrumb(&$form) {
  $form['used_cars_settings']['fonts'] = array(
    '#type' => 'details',
    '#title' => t('Typography'),
    '#group' => 'used_cars_settings',
  );

  $options_font = array(
    'Abel, sans-serif' => 'Abel',
    'Arial, sans-serif' => 'Arial',
    'Comfortaa' => 'Comfortaa',
    'Dosis, sans-serif' => 'Dosis',
    'Droid Sans, sans-serif' => 'Droid Sans',
    'Francois One, sans-serif' => 'Francois One',
    'Georgia, serif' => 'Georgia',
    'Helvetica, sans-serif' => 'Helvetica',
    'Lato' => 'Lato',
    "Indie Flower, cursive" => "Indie Flower",
    "Shadows Into Light Two, cursive" => "Shadows Into Light Two",
    "Rock Salt, cursive, cursive" => "Rock Salt",
    'Lobster, sans-serif' => 'Lobster',
    'Lora, sans-serif' => 'Lora',
    'Open Sans Condensed, sans-serif' => 'Open Sans Condensed',
    'Open Sans, sans-serif' => 'Open Sans',
    'Oswald, sans-serif' => 'Oswald',
    'Oxygen, sans-serif' => 'Oxygen',
    'PT Sans Narrow, sans-serif' => 'PT Sans Narrow',
    'PT Sans' => 'PT Sans',
    'Prosto One, cursive' => 'Prosto One',
    'Quicksand, sans-serif' => 'Quicksand',
    'Raleway, sans-serif' => 'Raleway',
    'Roboto Condensed, sans-serif' => 'Roboto Condensed',
    'Roboto, sans-serif' => 'Roboto',
    'Share, cursive' => 'Share',
    'Source Sans Pro, sans-serif' => 'Source Sans Pro',
    'Times New Roman, sans-serif' => 'Times New Roman',
    'Ubuntu Condensed, sans-serif' => 'Ubuntu Condensed',
    'Ubuntu, sans-serif' => 'Ubuntu',
    'Verdana, sans-serif' => 'Verdana',
  );
  $fmass = array(
    'body_font' => t('Body font'),
    'main_menu_font' => t('Main menu font'),
    'top_menu_font' => t('Top menu font'),
    'body_links_font' => t('Body link font'),
    'footer_links_font' => t('Footer link font'),
    'h1_font' => 'h1',
    'h2_font' => 'h2',
    'h3_font' => 'h3',
    'h4_font' => 'h4',
    'h5_font' => 'h5',
    'h6_font' => 'h6',
  );
  foreach ($fmass as $key => $value) {
    $form['used_cars_settings']['fonts'][$key] = array(
      '#type' => 'select',
      '#options' => $options_font,
      '#title' => $value,
      '#default_value' => theme_get_setting($key, 'used_cars'),
    );
  }

}

/**
 * A helper function to create a h3 tag.
 *
 * @param string $value
 *   The translated value for in the h3.
 *
 * @return string
 *   The h3 tag.
 */
function _used_cars_theme_create_prefix($value) {
  $meta_generator = array(
    '#type' => 'html_tag',
    '#tag' => 'h3',
    '#value' => $value,
  );
  return \Drupal::service('renderer')
    ->render($meta_generator, FALSE);
}
