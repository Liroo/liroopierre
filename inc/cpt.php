<?php

function cptui_register_my_cpts() {

	/**
	 * Post Type: Projects.
	 */

	$labels = array(
		"name" => __( "Projects", "liroo" ),
		"singular_name" => __( "Project", "liroo" ),
	);

	$args = array(
		"label" => __( "Projects", "liroo" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "project", "with_front" => true ),
		"query_var" => true,
		"menu_position" => 5,
		"supports" => array( "title" ),
	);

	register_post_type( "project", $args );
}

add_action( 'init', 'cptui_register_my_cpts' );
