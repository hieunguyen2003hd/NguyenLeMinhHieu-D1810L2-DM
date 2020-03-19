<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'starrynights' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'a0Ml*d~[puxf,=Fs C+!?KFiZn+n>~%2>h|3K0*k4%Yr_C6|d~:`e{6kO}0Ko/iI' );
define( 'SECURE_AUTH_KEY',  '0&$+aa]8mLeb[FSBGR!o@-^jWk>ftO8VZ&:Ba}6h+L`B@0Z([%IIxgR(Khgl.CBL' );
define( 'LOGGED_IN_KEY',    'Mw(*<?Xbj-lRPyHr0@/v&k8b`vbttN+{E?6T1BNs<!,$]ov|8)|B-EIi8n(uvT/u' );
define( 'NONCE_KEY',        '=GID& @}ENT&R>n-`jMgFO%_qnds@HA&O=Oqh[.8<<yLT2ns;g<d;^[GD#ETiA,?' );
define( 'AUTH_SALT',        'NVmohc^}{Gn`?z6M0[]:uQ=B9+sP6j1J`mesU3wPcb~GT%q$ty-[ #-I4`nq}iU6' );
define( 'SECURE_AUTH_SALT', '}DGTnO2}^5DJGrkr`:J$p^v:Pn#eyEP5SUyE s]jfO3hYYq_GMZ.^Gzjc/]/r3*b' );
define( 'LOGGED_IN_SALT',   '*1QT8Ft@:_p7`7bK(i}fdP2o@+0X7c0ta+3V|?idxV%vBtV_.u%#>96m(I{5prZZ' );
define( 'NONCE_SALT',       '?[7b7ol,Xu2P`HNN`av1Ae9d`yIO O?JX8wC9uv1Dhe0a1a+LBv#|4w%+#H*q,R#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
