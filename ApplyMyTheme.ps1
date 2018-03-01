function HashToDictionary {
  Param ([Hashtable]$ht)
  $dictionary = New-Object "System.Collections.Generic.Dictionary``2[System.String,System.String]"
  foreach ($entry in $ht.GetEnumerator()) {
    $dictionary.Add($entry.Name, $entry.Value)
  }
  return $dictionary
}

$themepallette = HashToDictionary(@{
"themePrimary" = "#003262";
"themeLighterAlt" = "#cde7ff";
"themeLighter" = "#a0d1ff";
"themeLight" = "#73bbff";
"themeTertiary" = "#45a5ff";
"themeSecondary" = "#188fff";
"themeDarkAlt" = "#0078e9";
"themeDark" = "#0061bc";
"themeDarker" = "#004a8e";
"neutralLighterAlt" = "#f8f8f8";
"neutralLighter" = "#f4f4f4";
"neutralLight" = "#eaeaea";
"neutralQuaternaryAlt" = "#dadada";
"neutralQuaternary" = "#d0d0d0";
"neutralTertiaryAlt" = "#c8c8c8";
"neutralTertiary" = "#e0e0e0";
"neutralSecondary" = "#737373";
"neutralPrimaryAlt" = "#5a5a5a";
"neutralPrimary" = "#646464";
"neutralDark" = "#464646";
"black" = "#373737";
"white" = "#ffffff";
"primaryBackground" = "#ffffff";
"primaryText" = "#646464";
"bodyBackground" = "#ffffff";
"bodyText" = "#646464";
"disabledBackground" = "#f4f4f4";
"disabledText" = "#c8c8c8";
})

$themepallette =@{
"themePrimary" = "#003262";
"themeLighterAlt" = "#cde7ff";
"themeLighter" = "#a0d1ff";
"themeLight" = "#73bbff";
"themeTertiary" = "#45a5ff";
"themeSecondary" = "#188fff";
"themeDarkAlt" = "#0078e9";
"themeDark" = "#fff";
"themeDarker" = "#fff";
"neutralLighterAlt" = "#f8f8f8";
"neutralLighter" = "#f4f4f4";
"neutralLight" = "#eaeaea";
"neutralQuaternaryAlt" = "#dadada";
"neutralQuaternary" = "#d0d0d0";
"neutralTertiaryAlt" = "#c8c8c8";
"neutralTertiary" = "#e0e0e0";
"neutralSecondary" = "#737373";
"neutralPrimaryAlt" = "#5a5a5a";
"neutralPrimary" = "#646464";
"neutralDark" = "#464646";
"black" = "#373737";
"white" = "#ffffff";
"primaryBackground" = "#ffffff";
"primaryText" = "#646464";
"bodyBackground" = "#ffffff";
"bodyText" = "#646464";
"disabledBackground" = "#f4f4f4";
"disabledText" = "#c8c8c8";
}


Add-SPOTheme -Name "LB Company Theme" -Palette $themepallette -IsInverted $false -Overwrite
