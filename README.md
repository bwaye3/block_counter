# *Add to the subtheme.libraries.yml*

#Counter <br />
gt-counter: <br />
version: "2.0.x" <br />
css: <br />
theme: <br />
//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css: { type: external } <br />
templates/block/custom/counter/css/gt-counter.css: {} <br />
js: <br />
//cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js: { type: external } <br />
templates/block/custom/counter/js/jquery.counterup.js: {} <br />
templates/block/custom/counter/js/counter.js: {} <br />
templates/block/custom/counter/js/waypoint.js: {} <br />
dependencies: <br />
- core/jquery <br />

# *Add to the repositories section in subtheme composer.json*

"repositories": [ <br />
{ <br />
"type": "vcs", <br />
"url": "https://github.gatech.edu/ICWebTeam/block_counter.git" <br />
}
# *Add to the require in subtheme composer.json*

"require": { <br />
"gt/counter": "dev-master" <br />
"mnsami/composer-custom-directory-installer": "^2.0"<br />
},

# *Add to the sub_theme.theme*
function subtheme_page_attachments_alter(&$page) { <br />
$page['#attached']['library'][] = 'subtheme/gt-counter';} <br />

# *Add to the installer paths in subtheme composer.json*
"installer-paths": { <br />
"web/themes/contrib/SUBTHEME/templates/block/custom/counter": [ <br />
"gt/counter" <br />
] <br />

# *Implements hook_page_attachments_alter(). in subtheme.theme*
function SUBTHEME_page_attachments_alter(&$page) {<br />
$page['#attached']['library'][] = 'SUBTHEME/counter';<br />
}
},

# **CUSTOM BLOCK  SET-UP**
![](images/set-up.png)

# **TAXONOMY SET-UP**
![](images/animations.png)
