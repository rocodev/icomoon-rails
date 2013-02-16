/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon-essential\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe001;',
			'icon-home-2' : '&#xe000;',
			'icon-office' : '&#xe002;',
			'icon-newspaper' : '&#xe003;',
			'icon-pencil' : '&#xe004;',
			'icon-pencil-2' : '&#xe005;',
			'icon-pencil-3' : '&#xe006;',
			'icon-pencil-4' : '&#xe007;',
			'icon-image' : '&#xe008;',
			'icon-movie' : '&#xe009;',
			'icon-pause' : '&#xe00a;',
			'icon-play' : '&#xe00b;',
			'icon-exit' : '&#xe00c;',
			'icon-enter' : '&#xe00d;',
			'icon-exit-2' : '&#xe00e;',
			'icon-enter-2' : '&#xe00f;',
			'icon-exit-3' : '&#xe010;',
			'icon-cancel-circle' : '&#xe011;',
			'icon-thumbs-up' : '&#xe012;',
			'icon-home-3' : '&#xe013;',
			'icon-home-4' : '&#xe014;',
			'icon-home-5' : '&#xe015;',
			'icon-home-6' : '&#xe016;',
			'icon-home-7' : '&#xe017;',
			'icon-quill' : '&#xe018;',
			'icon-pen' : '&#xe019;',
			'icon-image-2' : '&#xe01a;',
			'icon-image-3' : '&#xe01b;',
			'icon-movie-2' : '&#xe01c;',
			'icon-film' : '&#xe01d;',
			'icon-rock' : '&#xe01e;',
			'icon-bishop' : '&#xe01f;',
			'icon-mic' : '&#xe020;',
			'icon-mic-2' : '&#xe021;',
			'icon-file-minus' : '&#xe022;',
			'icon-file-download' : '&#xe023;',
			'icon-knight' : '&#xe024;',
			'icon-book' : '&#xe025;',
			'icon-camera' : '&#xe026;',
			'icon-pen-2' : '&#xe027;',
			'icon-pen-3' : '&#xe028;',
			'icon-marker' : '&#xe029;',
			'icon-blog' : '&#xe02a;',
			'icon-droplet' : '&#xe02b;',
			'icon-paint-format' : '&#xe02c;',
			'icon-play-2' : '&#xe02d;',
			'icon-mic-3' : '&#xe02e;',
			'icon-paste' : '&#xe02f;',
			'icon-folder-minus' : '&#xe030;',
			'icon-file' : '&#xe031;',
			'icon-diamonds' : '&#xe032;',
			'icon-image-4' : '&#xe033;',
			'icon-image-5' : '&#xe034;',
			'icon-images' : '&#xe035;',
			'icon-headphones' : '&#xe036;',
			'icon-headphones-2' : '&#xe037;',
			'icon-droplet-2' : '&#xe038;',
			'icon-music' : '&#xe039;',
			'icon-piano' : '&#xe03a;',
			'icon-music-2' : '&#xe03b;',
			'icon-music-3' : '&#xe03c;',
			'icon-eyedropper' : '&#xe03d;',
			'icon-camera-2' : '&#xe03e;',
			'icon-camera-3' : '&#xe03f;',
			'icon-camera-4' : '&#xe040;',
			'icon-film-2' : '&#xe041;',
			'icon-film-3' : '&#xe042;',
			'icon-camera-5' : '&#xe043;',
			'icon-camera-6' : '&#xe044;',
			'icon-camera-7' : '&#xe045;',
			'icon-dice' : '&#xe046;',
			'icon-pacman' : '&#xe047;',
			'icon-spades' : '&#xe048;',
			'icon-clubs' : '&#xe049;',
			'icon-king' : '&#xe04a;',
			'icon-queen' : '&#xe04b;',
			'icon-radio' : '&#xe04c;',
			'icon-feed' : '&#xe04d;',
			'icon-podcast' : '&#xe04e;',
			'icon-connection' : '&#xe04f;',
			'icon-new' : '&#xe050;',
			'icon-bullhorn' : '&#xe051;',
			'icon-pawn' : '&#xe052;',
			'icon-book-2' : '&#xe053;',
			'icon-megaphone' : '&#xe054;',
			'icon-library' : '&#xe055;',
			'icon-file-remove' : '&#xe056;',
			'icon-file-2' : '&#xe057;',
			'icon-folder-minus-2' : '&#xe058;',
			'icon-folder-plus' : '&#xe059;',
			'icon-steam' : '&#xe05a;',
			'icon-delicious' : '&#xe05b;',
			'icon-yelp' : '&#xe05c;',
			'icon-libreoffice' : '&#xe05d;',
			'icon-stumbleupon' : '&#xe05e;',
			'icon-tux' : '&#xe05f;',
			'icon-steam-2' : '&#xe060;',
			'icon-flickr' : '&#xe061;',
			'icon-lanyrd' : '&#xe062;',
			'icon-facebook' : '&#xe063;',
			'icon-facebook-2' : '&#xe064;',
			'icon-share' : '&#xe065;',
			'icon-console' : '&#xe066;',
			'icon-paragraph-right' : '&#xe067;',
			'icon-paragraph-justify' : '&#xe068;',
			'icon-subscript' : '&#xe069;',
			'icon-superscript' : '&#xe06a;',
			'icon-subscript-2' : '&#xe06b;',
			'icon-paragraph-left' : '&#xe06c;',
			'icon-share-2' : '&#xe06d;',
			'icon-instagram' : '&#xe06f;',
			'icon-apple' : '&#xe070;',
			'icon-yahoo' : '&#xe071;',
			'icon-stumbleupon-2' : '&#xe072;',
			'icon-opera' : '&#xe073;',
			'icon-safari' : '&#xe074;',
			'icon-IE' : '&#xe075;',
			'icon-firefox' : '&#xe076;',
			'icon-IcoMoon' : '&#xe077;',
			'icon-file-pdf' : '&#xe078;',
			'icon-file-openoffice' : '&#xe079;',
			'icon-file-word' : '&#xe07a;',
			'icon-file-excel' : '&#xe07b;',
			'icon-file-zip' : '&#xe07c;',
			'icon-file-xml' : '&#xe07d;',
			'icon-file-css' : '&#xe07e;',
			'icon-html5' : '&#xe07f;',
			'icon-file-powerpoint' : '&#xe080;',
			'icon-html5-2' : '&#xe081;',
			'icon-css3' : '&#xe082;',
			'icon-chrome' : '&#xe083;',
			'icon-paypal' : '&#xe084;',
			'icon-paypal-2' : '&#xe085;',
			'icon-paypal-3' : '&#xe086;',
			'icon-foursquare' : '&#xe087;',
			'icon-flattr' : '&#xe088;',
			'icon-xing' : '&#xe089;',
			'icon-pinterest' : '&#xe08a;',
			'icon-pinterest-2' : '&#xe08b;',
			'icon-finder' : '&#xe08c;',
			'icon-android' : '&#xe08d;',
			'icon-stackoverflow' : '&#xe08e;',
			'icon-xing-2' : '&#xe08f;',
			'icon-windows' : '&#xe090;',
			'icon-windows8' : '&#xe091;',
			'icon-soundcloud' : '&#xe092;',
			'icon-reddit' : '&#xe093;',
			'icon-foursquare-2' : '&#xe094;',
			'icon-soundcloud-2' : '&#xe095;',
			'icon-skype' : '&#xe096;',
			'icon-linkedin' : '&#xe097;',
			'icon-lastfm' : '&#xe098;',
			'icon-lastfm-2' : '&#xe099;',
			'icon-tumblr' : '&#xe09a;',
			'icon-tumblr-2' : '&#xe09b;',
			'icon-blogger' : '&#xe09c;',
			'icon-blogger-2' : '&#xe09d;',
			'icon-joomla' : '&#xe09e;',
			'icon-github' : '&#xe09f;',
			'icon-github-2' : '&#xe0a0;',
			'icon-github-3' : '&#xe06e;',
			'icon-flickr-2' : '&#xe0a1;',
			'icon-github-4' : '&#xe0a2;',
			'icon-flickr-3' : '&#xe0a3;',
			'icon-github-5' : '&#xe0a4;',
			'icon-picassa' : '&#xe0a5;',
			'icon-picassa-2' : '&#xe0a6;',
			'icon-dribbble' : '&#xe0a7;',
			'icon-wordpress' : '&#xe0a8;',
			'icon-wordpress-2' : '&#xe0a9;',
			'icon-dribbble-2' : '&#xe0aa;',
			'icon-dribbble-3' : '&#xe0ab;',
			'icon-forrst' : '&#xe0ac;',
			'icon-forrst-2' : '&#xe0ad;',
			'icon-deviantart' : '&#xe0ae;',
			'icon-deviantart-2' : '&#xe0af;',
			'icon-vimeo' : '&#xe0b0;',
			'icon-vimeo2' : '&#xe0b1;',
			'icon-vimeo-2' : '&#xe0b2;',
			'icon-youtube' : '&#xe0b3;',
			'icon-feed-2' : '&#xe0b4;',
			'icon-feed-3' : '&#xe0b5;',
			'icon-twitter' : '&#xe0b6;',
			'icon-twitter-2' : '&#xe0b7;',
			'icon-mail' : '&#xe0b8;',
			'icon-mail-2' : '&#xe0b9;',
			'icon-twitter-3' : '&#xe0ba;',
			'icon-mail-3' : '&#xe0bb;',
			'icon-mail-4' : '&#xe0bc;',
			'icon-google-plus' : '&#xe0bd;',
			'icon-feed-4' : '&#xe0be;',
			'icon-youtube-2' : '&#xe0bf;',
			'icon-google-plus-2' : '&#xe0c0;',
			'icon-flickr-4' : '&#xe0c1;',
			'icon-google' : '&#xe0c2;',
			'icon-google-plus-3' : '&#xe0c3;',
			'icon-google-drive' : '&#xe0c4;',
			'icon-facebook-3' : '&#xe0c5;',
			'icon-code' : '&#xe0c6;',
			'icon-embed' : '&#xe0c7;',
			'icon-google-plus-4' : '&#xe0c8;',
			'icon-popout' : '&#xe0c9;',
			'icon-new-tab' : '&#xe0ca;',
			'icon-new-tab-2' : '&#xe0cb;',
			'icon-share-3' : '&#xe0cc;',
			'icon-indent-decrease' : '&#xe0cd;',
			'icon-indent-increase' : '&#xe0ce;',
			'icon-paragraph-justify-2' : '&#xe0cf;',
			'icon-paragraph-right-2' : '&#xe0d0;',
			'icon-text-color' : '&#xe0d1;',
			'icon-paragraph-center' : '&#xe0d2;',
			'icon-pagebreak' : '&#xe0d3;',
			'icon-clear-formatting' : '&#xe0d4;',
			'icon-table' : '&#xe0d5;',
			'icon-insert-template' : '&#xe0d6;',
			'icon-table-2' : '&#xe0d7;',
			'icon-pilcrow' : '&#xe0d8;',
			'icon-left-to-right' : '&#xe0d9;',
			'icon-right-to-left' : '&#xe0da;',
			'icon-paragraph-left-2' : '&#xe0db;',
			'icon-paragraph-center-2' : '&#xe0dc;',
			'icon-superscript-2' : '&#xe0dd;',
			'icon-page-break' : '&#xe0de;',
			'icon-page-break-2' : '&#xe0df;',
			'icon-nbsp' : '&#xe0e0;',
			'icon-italic' : '&#xe0e1;',
			'icon-bold' : '&#xe0e2;',
			'icon-font-size' : '&#xe0e3;',
			'icon-text-width' : '&#xe0e4;',
			'icon-text-height' : '&#xe0e5;',
			'icon-underline' : '&#xe0e6;',
			'icon-strikethrough' : '&#xe0e7;',
			'icon-omega' : '&#xe0e8;',
			'icon-sigma' : '&#xe0e9;',
			'icon-font' : '&#xe0ea;',
			'icon-checkbox-checked' : '&#xe0eb;',
			'icon-checkbox-unchecked' : '&#xe0ec;',
			'icon-arrow-down' : '&#xe0ed;',
			'icon-arrow-up' : '&#xe0ee;',
			'icon-arrow-up-right' : '&#xe0ef;',
			'icon-arrow-right' : '&#xe0f0;',
			'icon-arrow-right-2' : '&#xe0f1;',
			'icon-arrow-left' : '&#xe0f2;',
			'icon-checkbox-partial' : '&#xe0f3;',
			'icon-enter-3' : '&#xe0f4;',
			'icon-arrow-down-2' : '&#xe0f5;',
			'icon-arrow-down-right' : '&#xe0f6;',
			'icon-arrow-down-3' : '&#xe0f7;',
			'icon-arrow-left-2' : '&#xe0f8;',
			'icon-radio-unchecked' : '&#xe0f9;',
			'icon-esc' : '&#xe0fa;',
			'icon-enter-4' : '&#xe0fb;',
			'icon-arrow-up-2' : '&#xe0fc;',
			'icon-arrow-down-left' : '&#xe0fd;',
			'icon-radio-checked' : '&#xe0fe;',
			'icon-crop' : '&#xe0ff;',
			'icon-rulers' : '&#xe100;',
			'icon-scissors' : '&#xe101;',
			'icon-vector' : '&#xe102;',
			'icon-scissors-2' : '&#xe103;',
			'icon-filter' : '&#xe104;',
			'icon-filter-2' : '&#xe105;',
			'icon-filter-3' : '&#xe106;',
			'icon-filter-4' : '&#xe107;',
			'icon-command' : '&#xe108;',
			'icon-sort' : '&#xe109;',
			'icon-sort-2' : '&#xe10a;',
			'icon-transmission' : '&#xe10b;',
			'icon-transmission-2' : '&#xe10c;',
			'icon-tab' : '&#xe10d;',
			'icon-backspace' : '&#xe10e;',
			'icon-arrow-right-3' : '&#xe10f;',
			'icon-arrow-down-4' : '&#xe110;',
			'icon-arrow-left-3' : '&#xe111;',
			'icon-backspace-2' : '&#xe112;',
			'icon-arrow-up-3' : '&#xe113;',
			'icon-backspace-3' : '&#xe114;',
			'icon-arrow-right-4' : '&#xe115;',
			'icon-arrow-down-5' : '&#xe116;',
			'icon-arrow-left-4' : '&#xe117;',
			'icon-arrow-up-4' : '&#xe118;',
			'icon-arrow-right-5' : '&#xe119;',
			'icon-arrow-left-5' : '&#xe11a;',
			'icon-arrow-down-left-2' : '&#xe11b;',
			'icon-arrow-down-6' : '&#xe11c;',
			'icon-arrow-up-5' : '&#xe11d;',
			'icon-arrow-up-left' : '&#xe11e;',
			'icon-arrow-left-6' : '&#xe11f;',
			'icon-arrow-up-6' : '&#xe120;',
			'icon-arrow' : '&#xe121;',
			'icon-arrow-2' : '&#xe122;',
			'icon-arrow-3' : '&#xe123;',
			'icon-arrow-4' : '&#xe124;',
			'icon-arrow-right-6' : '&#xe125;',
			'icon-arrow-down-right-2' : '&#xe126;',
			'icon-arrow-up-left-2' : '&#xe127;',
			'icon-arrow-left-7' : '&#xe128;',
			'icon-arrow-up-right-2' : '&#xe129;',
			'icon-arrow-down-left-3' : '&#xe12a;',
			'icon-arrow-down-7' : '&#xe12b;',
			'icon-arrow-down-right-3' : '&#xe12c;',
			'icon-arrow-right-7' : '&#xe12d;',
			'icon-arrow-up-7' : '&#xe12e;',
			'icon-arrow-up-left-3' : '&#xe12f;',
			'icon-arrow-up-right-3' : '&#xe130;',
			'icon-arrow-right-8' : '&#xe131;',
			'icon-arrow-down-8' : '&#xe132;',
			'icon-arrow-up-right-4' : '&#xe133;',
			'icon-arrow-down-right-4' : '&#xe134;',
			'icon-arrow-down-left-4' : '&#xe135;',
			'icon-arrow-left-8' : '&#xe136;',
			'icon-arrow-up-left-4' : '&#xe137;',
			'icon-arrow-up-8' : '&#xe138;',
			'icon-arrow-up-right-5' : '&#xe139;',
			'icon-arrow-right-9' : '&#xe13a;',
			'icon-arrow-down-9' : '&#xe13b;',
			'icon-arrow-down-left-5' : '&#xe13c;',
			'icon-arrow-left-9' : '&#xe13d;',
			'icon-arrow-down-right-5' : '&#xe13e;',
			'icon-arrow-up-9' : '&#xe13f;',
			'icon-shuffle' : '&#xe140;',
			'icon-arrow-up-left-5' : '&#xe141;',
			'icon-loop' : '&#xe142;',
			'icon-arrow-left-10' : '&#xe143;',
			'icon-loop-2' : '&#xe144;',
			'icon-arrow-down-10' : '&#xe145;',
			'icon-loop-3' : '&#xe146;',
			'icon-arrow-up-10' : '&#xe147;',
			'icon-loop-4' : '&#xe148;',
			'icon-volume-mute' : '&#xe149;',
			'icon-volume0' : '&#xe14a;',
			'icon-volume1' : '&#xe14b;',
			'icon-arrow-right-10' : '&#xe14c;',
			'icon-volume2' : '&#xe14d;',
			'icon-arrow-first' : '&#xe14e;',
			'icon-volume4' : '&#xe14f;',
			'icon-wave' : '&#xe150;',
			'icon-volume3' : '&#xe151;',
			'icon-arrow-up-11' : '&#xe152;',
			'icon-wave-2' : '&#xe153;',
			'icon-arrow-right-11' : '&#xe154;',
			'icon-volume-mute-2' : '&#xe155;',
			'icon-arrow-down-11' : '&#xe156;',
			'icon-arrow-left-11' : '&#xe157;',
			'icon-loop-5' : '&#xe158;',
			'icon-arrow-right-12' : '&#xe159;',
			'icon-volume-decrease' : '&#xe15a;',
			'icon-eject' : '&#xe15b;',
			'icon-volume-high' : '&#xe15c;',
			'icon-volume5' : '&#xe15d;',
			'icon-next' : '&#xe15e;',
			'icon-volume-increase' : '&#xe15f;',
			'icon-shuffle-2' : '&#xe160;',
			'icon-previous' : '&#xe161;',
			'icon-exit-4' : '&#xe162;',
			'icon-last' : '&#xe163;',
			'icon-volume-mute-3' : '&#xe164;',
			'icon-first' : '&#xe165;',
			'icon-volume-low' : '&#xe166;',
			'icon-volume-mute-4' : '&#xe167;',
			'icon-volume-medium' : '&#xe168;',
			'icon-forward' : '&#xe169;',
			'icon-backward' : '&#xe16a;',
			'icon-volume-high-2' : '&#xe16b;',
			'icon-volume-decrease-2' : '&#xe16c;',
			'icon-stop' : '&#xe16d;',
			'icon-enter-5' : '&#xe16e;',
			'icon-warning' : '&#xe16f;',
			'icon-move' : '&#xe170;',
			'icon-blocked' : '&#xe171;',
			'icon-plus' : '&#xe172;',
			'icon-volume-increase-2' : '&#xe173;',
			'icon-play-3' : '&#xe174;',
			'icon-volume-mute-5' : '&#xe175;',
			'icon-volume-mute-6' : '&#xe176;',
			'icon-volume-low-2' : '&#xe177;',
			'icon-volume-medium-2' : '&#xe178;',
			'icon-stop-2' : '&#xe179;',
			'icon-forward-2' : '&#xe17a;',
			'icon-spell-check' : '&#xe17b;',
			'icon-checkmark' : '&#xe17c;',
			'icon-checkmark-2' : '&#xe17d;',
			'icon-minus-circle' : '&#xe17e;',
			'icon-minus-circle-2' : '&#xe17f;',
			'icon-info' : '&#xe180;',
			'icon-minus' : '&#xe181;',
			'icon-point-left' : '&#xe182;',
			'icon-evil' : '&#xe183;',
			'icon-info-2' : '&#xe184;',
			'icon-point-down' : '&#xe185;',
			'icon-point-up' : '&#xe186;',
			'icon-angry' : '&#xe187;',
			'icon-angry-2' : '&#xe188;',
			'icon-evil-2' : '&#xe189;',
			'icon-point-right' : '&#xe18a;',
			'icon-cancel-circle-2' : '&#xe18b;',
			'icon-notification' : '&#xe18c;',
			'icon-question' : '&#xe18d;',
			'icon-checkmark-circle' : '&#xe18e;',
			'icon-checkmark-circle-2' : '&#xe18f;',
			'icon-neutral' : '&#xe190;',
			'icon-neutral-2' : '&#xe191;',
			'icon-question-2' : '&#xe192;',
			'icon-question-3' : '&#xe193;',
			'icon-spam' : '&#xe194;',
			'icon-cancel' : '&#xe195;',
			'icon-checkmark-3' : '&#xe196;',
			'icon-plus-circle' : '&#xe197;',
			'icon-plus-circle-2' : '&#xe198;',
			'icon-question-4' : '&#xe199;',
			'icon-question-5' : '&#xe19a;',
			'icon-cursor' : '&#xe19b;',
			'icon-cursor-2' : '&#xe19c;',
			'icon-wondering' : '&#xe19d;',
			'icon-wondering-2' : '&#xe19e;',
			'icon-checkmark-4' : '&#xe19f;',
			'icon-close' : '&#xe1a0;',
			'icon-cool' : '&#xe1a1;',
			'icon-cool-2' : '&#xe1a2;',
			'icon-grin' : '&#xe1a3;',
			'icon-female' : '&#xe1a4;',
			'icon-peace' : '&#xe1a5;',
			'icon-yin-yang' : '&#xe1a6;',
			'icon-heart' : '&#xe1a7;',
			'icon-heart-2' : '&#xe1a8;',
			'icon-heart-broken' : '&#xe1a9;',
			'icon-weather-lightning' : '&#xe1aa;',
			'icon-bookmark' : '&#xe1ab;',
			'icon-moon' : '&#xe1ac;',
			'icon-bed' : '&#xe1ad;',
			'icon-bookmarks' : '&#xe1ae;',
			'icon-contrast' : '&#xe1af;',
			'icon-heart-3' : '&#xe1b0;',
			'icon-woman' : '&#xe1b1;',
			'icon-grin-2' : '&#xe1b2;',
			'icon-wink' : '&#xe1b3;',
			'icon-male' : '&#xe1b4;',
			'icon-heart-4' : '&#xe1b5;',
			'icon-brightness-contrast' : '&#xe1b6;',
			'icon-bookmark-2' : '&#xe1b7;',
			'icon-weather-rain' : '&#xe1b8;',
			'icon-bed-2' : '&#xe1b9;',
			'icon-bookmark-3' : '&#xe1ba;',
			'icon-brightness-low' : '&#xe1bb;',
			'icon-heart-broken-2' : '&#xe1bc;',
			'icon-wink-2' : '&#xe1bd;',
			'icon-confused' : '&#xe1be;',
			'icon-sad' : '&#xe1bf;',
			'icon-people' : '&#xe1c0;',
			'icon-man' : '&#xe1c1;',
			'icon-heart-5' : '&#xe1c2;',
			'icon-brightness-medium' : '&#xe1c3;',
			'icon-brightness-high' : '&#xe1c4;',
			'icon-heart-6' : '&#xe1c5;',
			'icon-sad-2' : '&#xe1c6;',
			'icon-tongue' : '&#xe1c7;',
			'icon-shocked' : '&#xe1c8;',
			'icon-tongue-2' : '&#xe1c9;',
			'icon-smiley' : '&#xe1ca;',
			'icon-smiley-2' : '&#xe1cb;',
			'icon-happy' : '&#xe1cc;',
			'icon-heart-broken-3' : '&#xe1cd;',
			'icon-thumbs-up-2' : '&#xe1ce;',
			'icon-thumbs-down' : '&#xe1cf;',
			'icon-thumbs-down-2' : '&#xe1d0;',
			'icon-thumbs-up-3' : '&#xe1d1;',
			'icon-shocked-2' : '&#xe1d2;',
			'icon-confused-2' : '&#xe1d3;',
			'icon-happy-2' : '&#xe1d4;',
			'icon-thumbs-up-4' : '&#xe1d5;',
			'icon-star' : '&#xe1d6;',
			'icon-windy' : '&#xe1d7;',
			'icon-backward-2' : '&#xe1d8;',
			'icon-pause-2' : '&#xe1d9;',
			'icon-file-upload' : '&#xe1da;',
			'icon-file-check' : '&#xe1db;',
			'icon-file-3' : '&#xe1dc;',
			'icon-copy' : '&#xe1dd;',
			'icon-profile' : '&#xe1de;',
			'icon-books' : '&#xe1df;',
			'icon-file-4' : '&#xe1e0;',
			'icon-copy-2' : '&#xe1e1;',
			'icon-copy-3' : '&#xe1e2;',
			'icon-file-5' : '&#xe1e3;',
			'icon-connection-2' : '&#xe1e4;',
			'icon-copy-4' : '&#xe1e5;',
			'icon-file-6' : '&#xe1e6;',
			'icon-paste-2' : '&#xe1e7;',
			'icon-file-7' : '&#xe1e8;',
			'icon-file-plus' : '&#xe1e9;',
			'icon-mic-4' : '&#xe1ea;',
			'icon-stack' : '&#xe1eb;',
			'icon-barcode' : '&#xe1ec;',
			'icon-call-incoming' : '&#xe1ed;',
			'icon-location' : '&#xe1ee;',
			'icon-alarm' : '&#xe1ef;',
			'icon-screen' : '&#xe1f0;',
			'icon-screen-2' : '&#xe1f1;',
			'icon-watch' : '&#xe1f2;',
			'icon-location-2' : '&#xe1f3;',
			'icon-cart-remove' : '&#xe1f4;',
			'icon-barcode-2' : '&#xe1f5;',
			'icon-tag' : '&#xe1f6;',
			'icon-folder-plus-2' : '&#xe1f7;',
			'icon-folder-download' : '&#xe1f8;',
			'icon-paste-3' : '&#xe1f9;',
			'icon-tags' : '&#xe1fa;',
			'icon-cart-remove-2' : '&#xe1fb;',
			'icon-cart-checkout' : '&#xe1fc;',
			'icon-basket' : '&#xe1fd;',
			'icon-contact-remove' : '&#xe1fe;',
			'icon-contact-add' : '&#xe1ff;',
			'icon-location-3' : '&#xe200;',
			'icon-clock' : '&#xe201;',
			'icon-mouse' : '&#xe202;',
			'icon-clock-2' : '&#xe203;',
			'icon-contact-remove-2' : '&#xe204;',
			'icon-keyboard' : '&#xe205;',
			'icon-pushpin' : '&#xe206;',
			'icon-mouse-2' : '&#xe207;',
			'icon-clock-3' : '&#xe208;',
			'icon-envelop' : '&#xe209;',
			'icon-contact-add-2' : '&#xe20a;',
			'icon-cart-add' : '&#xe20b;',
			'icon-tag-2' : '&#xe20c;',
			'icon-folder-remove' : '&#xe20d;',
			'icon-folder' : '&#xe20e;',
			'icon-folder-open' : '&#xe20f;',
			'icon-folder8' : '&#xe210;',
			'icon-tag-3' : '&#xe211;',
			'icon-cart-minus' : '&#xe212;',
			'icon-phone' : '&#xe213;',
			'icon-mail-send' : '&#xe214;',
			'icon-clock-4' : '&#xe215;',
			'icon-print' : '&#xe216;',
			'icon-print-2' : '&#xe217;',
			'icon-history' : '&#xe218;',
			'icon-envelop-2' : '&#xe219;',
			'icon-phone-2' : '&#xe21a;',
			'icon-cart-plus' : '&#xe21b;',
			'icon-tag-4' : '&#xe21c;',
			'icon-tags-2' : '&#xe21d;',
			'icon-folder-minus-3' : '&#xe21e;',
			'icon-cart' : '&#xe21f;',
			'icon-direction' : '&#xe220;',
			'icon-map' : '&#xe221;',
			'icon-address-book' : '&#xe222;',
			'icon-support' : '&#xe223;',
			'icon-cart-2' : '&#xe224;',
			'icon-tag-5' : '&#xe225;',
			'icon-cc' : '&#xe226;',
			'icon-cart-3' : '&#xe227;',
			'icon-calculate' : '&#xe228;',
			'icon-phone-hang-up' : '&#xe229;',
			'icon-map-2' : '&#xe22a;',
			'icon-calendar' : '&#xe22b;',
			'icon-calendar-2' : '&#xe22c;',
			'icon-notebook' : '&#xe22d;',
			'icon-phone-3' : '&#xe22e;',
			'icon-calendar-3' : '&#xe22f;',
			'icon-folder-2' : '&#xe230;',
			'icon-folder-download-2' : '&#xe231;',
			'icon-folder-upload' : '&#xe232;',
			'icon-folder-plus-3' : '&#xe233;',
			'icon-certificate' : '&#xe234;',
			'icon-folder-3' : '&#xe235;',
			'icon-folder-upload-2' : '&#xe236;',
			'icon-qrcode' : '&#xe237;',
			'icon-ticket' : '&#xe238;',
			'icon-cart-4' : '&#xe239;',
			'icon-cart-5' : '&#xe23a;',
			'icon-folder-open-2' : '&#xe23b;',
			'icon-calculate-2' : '&#xe23c;',
			'icon-basket-2' : '&#xe23d;',
			'icon-coin' : '&#xe23e;',
			'icon-call-outgoing' : '&#xe23f;',
			'icon-location-4' : '&#xe240;',
			'icon-alarm-2' : '&#xe241;',
			'icon-laptop' : '&#xe242;',
			'icon-mobile' : '&#xe243;',
			'icon-bell' : '&#xe244;',
			'icon-phone-4' : '&#xe245;',
			'icon-phone-5' : '&#xe246;',
			'icon-credit' : '&#xe247;',
			'icon-compass' : '&#xe248;',
			'icon-phone-hang-up-2' : '&#xe249;',
			'icon-map-3' : '&#xe24a;',
			'icon-compass-2' : '&#xe24b;',
			'icon-stopwatch' : '&#xe24c;',
			'icon-mobile-2' : '&#xe24d;',
			'icon-tv' : '&#xe24e;',
			'icon-calendar-4' : '&#xe24f;',
			'icon-tablet' : '&#xe250;',
			'icon-eye' : '&#xe251;',
			'icon-sun' : '&#xe252;',
			'icon-star-2' : '&#xe253;',
			'icon-star-3' : '&#xe254;',
			'icon-eye-2' : '&#xe255;',
			'icon-eye-blocked' : '&#xe256;',
			'icon-umbrella' : '&#xe257;',
			'icon-star-4' : '&#xe258;',
			'icon-fan' : '&#xe259;',
			'icon-eye-3' : '&#xe25a;',
			'icon-eye-4' : '&#xe25b;',
			'icon-eye-blocked-2' : '&#xe25c;',
			'icon-weather-snow' : '&#xe25d;',
			'icon-star-5' : '&#xe25e;',
			'icon-star-6' : '&#xe25f;',
			'icon-sun-2' : '&#xe260;',
			'icon-link' : '&#xe261;',
			'icon-link-2' : '&#xe262;',
			'icon-cloud-upload' : '&#xe263;',
			'icon-cloud-download' : '&#xe264;',
			'icon-playlist' : '&#xe265;',
			'icon-grid' : '&#xe266;',
			'icon-gun-ban' : '&#xe267;',
			'icon-puzzle' : '&#xe268;',
			'icon-gun' : '&#xe269;',
			'icon-pyramid' : '&#xe26a;',
			'icon-briefcase' : '&#xe26b;',
			'icon-fire' : '&#xe26c;',
			'icon-medal' : '&#xe26d;',
			'icon-medal-2' : '&#xe26e;',
			'icon-apple-fruit' : '&#xe26f;',
			'icon-lab' : '&#xe270;',
			'icon-briefcase-2' : '&#xe271;',
			'icon-leaf' : '&#xe272;',
			'icon-bars' : '&#xe273;',
			'icon-bug' : '&#xe274;',
			'icon-bug-2' : '&#xe275;',
			'icon-stats-up' : '&#xe276;',
			'icon-equalizer' : '&#xe277;',
			'icon-contract' : '&#xe278;',
			'icon-spinner' : '&#xe279;',
			'icon-spinner-2' : '&#xe27a;',
			'icon-user' : '&#xe27b;',
			'icon-user-2' : '&#xe27c;',
			'icon-user-3' : '&#xe27d;',
			'icon-equalizer-2' : '&#xe27e;',
			'icon-expand' : '&#xe27f;',
			'icon-disk' : '&#xe280;',
			'icon-reply' : '&#xe281;',
			'icon-bubble-plus' : '&#xe282;',
			'icon-storage' : '&#xe283;',
			'icon-reply-2' : '&#xe284;',
			'icon-bubbles' : '&#xe285;',
			'icon-users' : '&#xe286;',
			'icon-bubble-minus' : '&#xe287;',
			'icon-bubble' : '&#xe288;',
			'icon-storage-2' : '&#xe289;',
			'icon-bubble-2' : '&#xe28a;',
			'icon-bubble-notification' : '&#xe28b;',
			'icon-database' : '&#xe28c;',
			'icon-database-2' : '&#xe28d;',
			'icon-undo' : '&#xe28e;',
			'icon-archive' : '&#xe28f;',
			'icon-bubble-3' : '&#xe290;',
			'icon-bubbles-2' : '&#xe291;',
			'icon-bubbles-3' : '&#xe292;',
			'icon-bubble-quote' : '&#xe293;',
			'icon-bubble-user' : '&#xe294;',
			'icon-bubble-check' : '&#xe295;',
			'icon-bubble-video-chat' : '&#xe296;',
			'icon-bubble-link' : '&#xe297;',
			'icon-bubble-first' : '&#xe298;',
			'icon-bubble-down' : '&#xe299;',
			'icon-bubble-left' : '&#xe29a;',
			'icon-bubble-trash' : '&#xe29b;',
			'icon-spinner-3' : '&#xe29c;',
			'icon-spinner-4' : '&#xe29d;',
			'icon-key' : '&#xe29e;',
			'icon-construction' : '&#xe29f;',
			'icon-cone' : '&#xe2a0;',
			'icon-cog' : '&#xe2a1;',
			'icon-key-2' : '&#xe2a2;',
			'icon-lock' : '&#xe2a3;',
			'icon-lock-2' : '&#xe2a4;',
			'icon-pie' : '&#xe2a5;',
			'icon-pie-2' : '&#xe2a6;',
			'icon-link-3' : '&#xe2a7;',
			'icon-link2' : '&#xe2a8;',
			'icon-upload' : '&#xe2a9;',
			'icon-download' : '&#xe2aa;',
			'icon-link-4' : '&#xe2ab;',
			'icon-download-2' : '&#xe2ac;',
			'icon-anchor' : '&#xe2ad;',
			'icon-link-5' : '&#xe2ae;',
			'icon-eye-5' : '&#xe2af;',
			'icon-flag' : '&#xe2b0;',
			'icon-flag-2' : '&#xe2b1;',
			'icon-flag-3' : '&#xe2b2;',
			'icon-flag-4' : '&#xe2b3;',
			'icon-attachment' : '&#xe2b4;',
			'icon-attachment-2' : '&#xe2b5;',
			'icon-eye-6' : '&#xe2b6;',
			'icon-link-6' : '&#xe2b7;',
			'icon-globe' : '&#xe2b8;',
			'icon-globe-2' : '&#xe2b9;',
			'icon-upload-2' : '&#xe2ba;',
			'icon-download-3' : '&#xe2bb;',
			'icon-upload-3' : '&#xe2bc;',
			'icon-download-4' : '&#xe2bd;',
			'icon-eye-7' : '&#xe2be;',
			'icon-upload-4' : '&#xe2bf;',
			'icon-earth' : '&#xe2c0;',
			'icon-cloud' : '&#xe2c1;',
			'icon-numbered-list' : '&#xe2c2;',
			'icon-list' : '&#xe2c3;',
			'icon-menu' : '&#xe2c4;',
			'icon-target' : '&#xe2c5;',
			'icon-target-2' : '&#xe2c6;',
			'icon-cube' : '&#xe2c7;',
			'icon-remove' : '&#xe2c8;',
			'icon-balance' : '&#xe2c9;',
			'icon-hammer' : '&#xe2ca;',
			'icon-food' : '&#xe2cb;',
			'icon-food-2' : '&#xe2cc;',
			'icon-medal-3' : '&#xe2cd;',
			'icon-medal-4' : '&#xe2ce;',
			'icon-mug' : '&#xe2cf;',
			'icon-remove-2' : '&#xe2d0;',
			'icon-cube-2' : '&#xe2d1;',
			'icon-boat' : '&#xe2d2;',
			'icon-target-3' : '&#xe2d3;',
			'icon-list-2' : '&#xe2d4;',
			'icon-menu-2' : '&#xe2d5;',
			'icon-signup' : '&#xe2d6;',
			'icon-accessibility' : '&#xe2d7;',
			'icon-road' : '&#xe2d8;',
			'icon-remove-3' : '&#xe2d9;',
			'icon-remove-4' : '&#xe2da;',
			'icon-dashboard' : '&#xe2db;',
			'icon-bottle' : '&#xe2dc;',
			'icon-meter-medium' : '&#xe2dd;',
			'icon-remove-5' : '&#xe2de;',
			'icon-truck' : '&#xe2df;',
			'icon-accessibility-2' : '&#xe2e0;',
			'icon-clipboard' : '&#xe2e1;',
			'icon-menu-3' : '&#xe2e2;',
			'icon-menu-4' : '&#xe2e3;',
			'icon-menu-5' : '&#xe2e4;',
			'icon-switch' : '&#xe2e5;',
			'icon-power' : '&#xe2e6;',
			'icon-lightning' : '&#xe2e7;',
			'icon-shield' : '&#xe2e8;',
			'icon-shield-2' : '&#xe2e9;',
			'icon-grid-2' : '&#xe2ea;',
			'icon-puzzle-2' : '&#xe2eb;',
			'icon-grid-3' : '&#xe2ec;',
			'icon-grid-4' : '&#xe2ed;',
			'icon-tree' : '&#xe2ee;',
			'icon-tree-2' : '&#xe2ef;',
			'icon-power-cord' : '&#xe2f0;',
			'icon-sun-glasses' : '&#xe2f1;',
			'icon-glasses' : '&#xe2f2;',
			'icon-glasses-2' : '&#xe2f3;',
			'icon-power-2' : '&#xe2f4;',
			'icon-tree-3' : '&#xe2f5;',
			'icon-cabinet' : '&#xe2f6;',
			'icon-redo' : '&#xe2f7;',
			'icon-rotate' : '&#xe2f8;',
			'icon-rotate-2' : '&#xe2f9;',
			'icon-drawer' : '&#xe2fa;',
			'icon-box-add' : '&#xe2fb;',
			'icon-flip' : '&#xe2fc;',
			'icon-box-remove' : '&#xe2fd;',
			'icon-download-5' : '&#xe2fe;',
			'icon-upload-5' : '&#xe2ff;',
			'icon-forward-3' : '&#xe300;',
			'icon-bubble-cancel' : '&#xe301;',
			'icon-bubble-forward' : '&#xe302;',
			'icon-user-block' : '&#xe303;',
			'icon-spinner-5' : '&#xe304;',
			'icon-expand-2' : '&#xe305;',
			'icon-equalizer-3' : '&#xe306;',
			'icon-spinner-6' : '&#xe307;',
			'icon-bubble-4' : '&#xe308;',
			'icon-redo-2' : '&#xe309;',
			'icon-bubble-5' : '&#xe30a;',
			'icon-bubble-dots' : '&#xe30b;',
			'icon-bubble-6' : '&#xe30c;',
			'icon-flip-2' : '&#xe30d;',
			'icon-undo-2' : '&#xe30e;',
			'icon-drawer-2' : '&#xe30f;',
			'icon-bubble-notification-2' : '&#xe310;',
			'icon-bubbles-4' : '&#xe311;',
			'icon-drawer-3' : '&#xe312;',
			'icon-bubbles-5' : '&#xe313;',
			'icon-bubble-locked' : '&#xe314;',
			'icon-bubble-star' : '&#xe315;',
			'icon-bubble-replu' : '&#xe316;',
			'icon-bubble-heart' : '&#xe317;',
			'icon-user-cancel' : '&#xe318;',
			'icon-user-minus' : '&#xe319;',
			'icon-user-plus' : '&#xe31a;',
			'icon-bubble-last' : '&#xe31b;',
			'icon-users-2' : '&#xe31c;',
			'icon-user-4' : '&#xe31d;',
			'icon-busy' : '&#xe31e;',
			'icon-busy-2' : '&#xe31f;',
			'icon-spinner-7' : '&#xe320;',
			'icon-bubble-forward-2' : '&#xe321;',
			'icon-bubble-reply' : '&#xe322;',
			'icon-bubble-paperclip' : '&#xe323;',
			'icon-zoom-out' : '&#xe324;',
			'icon-settings' : '&#xe325;',
			'icon-aid' : '&#xe326;',
			'icon-bars-2' : '&#xe327;',
			'icon-medal-5' : '&#xe328;',
			'icon-patch' : '&#xe329;',
			'icon-wand' : '&#xe32a;',
			'icon-stats' : '&#xe32b;',
			'icon-wrench' : '&#xe32c;',
			'icon-wrench-2' : '&#xe32d;',
			'icon-stats-2' : '&#xe32e;',
			'icon-podium' : '&#xe32f;',
			'icon-meter-fast' : '&#xe330;',
			'icon-rating' : '&#xe331;',
			'icon-stats-3' : '&#xe332;',
			'icon-tools' : '&#xe333;',
			'icon-unlocked' : '&#xe334;',
			'icon-search' : '&#xe335;',
			'icon-zoom-in' : '&#xe336;',
			'icon-zoom-in-2' : '&#xe337;',
			'icon-lock-3' : '&#xe338;',
			'icon-pie-3' : '&#xe339;',
			'icon-wand-2' : '&#xe33a;',
			'icon-bottle-2' : '&#xe33b;',
			'icon-hammer-2' : '&#xe33c;',
			'icon-rating-2' : '&#xe33d;',
			'icon-glass' : '&#xe33e;',
			'icon-rating-3' : '&#xe33f;',
			'icon-glass-2' : '&#xe340;',
			'icon-meter-slow' : '&#xe341;',
			'icon-lamp' : '&#xe342;',
			'icon-lamp-2' : '&#xe343;',
			'icon-gas-pump' : '&#xe344;',
			'icon-bus' : '&#xe345;',
			'icon-puzzle-3' : '&#xe346;',
			'icon-briefcase-3' : '&#xe347;',
			'icon-airplane' : '&#xe348;',
			'icon-airplane-2' : '&#xe349;',
			'icon-puzzle-4' : '&#xe34a;',
			'icon-paper-plane' : '&#xe34b;',
			'icon-car' : '&#xe34c;',
			'icon-glasses-3' : '&#xe34d;',
			'icon-lamp-3' : '&#xe34e;',
			'icon-meter' : '&#xe34f;',
			'icon-skull' : '&#xe350;',
			'icon-dumbbell' : '&#xe351;',
			'icon-paw' : '&#xe352;',
			'icon-magnet' : '&#xe353;',
			'icon-trophy' : '&#xe354;',
			'icon-trophy-2' : '&#xe355;',
			'icon-trophy-star' : '&#xe356;',
			'icon-diamond' : '&#xe357;',
			'icon-rocket' : '&#xe358;',
			'icon-skull-2' : '&#xe359;',
			'icon-flower' : '&#xe35a;',
			'icon-steps' : '&#xe35b;',
			'icon-crown' : '&#xe35c;',
			'icon-stats-down' : '&#xe35d;',
			'icon-ladder' : '&#xe35e;',
			'icon-cake' : '&#xe35f;',
			'icon-balloon' : '&#xe360;',
			'icon-meter2' : '&#xe361;',
			'icon-gift' : '&#xe362;',
			'icon-pie-4' : '&#xe363;',
			'icon-factory' : '&#xe364;',
			'icon-cog-2' : '&#xe365;',
			'icon-cogs' : '&#xe366;',
			'icon-cog-3' : '&#xe367;',
			'icon-inject' : '&#xe368;',
			'icon-contract-2' : '&#xe369;',
			'icon-spinner-8' : '&#xe36a;',
			'icon-vcard' : '&#xe36b;',
			'icon-hanger' : '&#xe36c;',
			'icon-quotes-left' : '&#xe36d;',
			'icon-binoculars' : '&#xe36e;',
			'icon-quotes-right' : '&#xe36f;',
			'icon-search-2' : '&#xe370;',
			'icon-cog-4' : '&#xe371;',
			'icon-unlocked-2' : '&#xe372;',
			'icon-search-3' : '&#xe373;',
			'icon-quotes-right-2' : '&#xe374;',
			'icon-quotes-right-3' : '&#xe375;',
			'icon-zoom-out-2' : '&#xe376;',
			'icon-bars-3' : '&#xe377;',
			'icon-busy-3' : '&#xe378;',
			'icon-user-block-2' : '&#xe379;',
			'icon-bubble-up' : '&#xe37a;',
			'icon-bubble-right' : '&#xe37b;',
			'icon-user-minus-2' : '&#xe37c;',
			'icon-user-minus-3' : '&#xe37d;',
			'icon-user-plus-2' : '&#xe37e;',
			'icon-bubbles-6' : '&#xe37f;',
			'icon-bubble-blocked' : '&#xe380;',
			'icon-user-plus-3' : '&#xe381;',
			'icon-user-cancel-2' : '&#xe382;',
			'icon-bubble-dots-2' : '&#xe383;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};