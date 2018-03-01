
# Site Collection URL or Sub Site URL
$siteurl = "https://lbforsikring.sharepoint.com/sites/Service"

# User Credentials
#$credential = Get-Credential

# Connects and Creates Context
Connect-PnPOnline -Url $siteurl -UseWebLogin


function writeItem(
$itemTitle,
$itemOther,
$attachments
) {
	# check if file exists first
	#$items=Add-PnPListItem -List "Produkter"
	$item = Get-PnpListItem -List "Produkter"
	
	for ($a=0; $a -lt $item.length; $a++) {
		$i=$item[$a]
		Write-host " " $i.Id " - " $i["Title"] 
		writeAttachment -item $i -fileWithPath $i["Varenummer"]
	}


}
function writeAttachment($item, $fileWithPath)
{
	$Att=@("C:\Users\nicd\Desktop\webbestil\" + $fileWithPath + ".jpg")

	$ctx=Get-PnPContext
	#$memoryStream = New-Object IO.FileStream($fileWithPath,[System.IO.FileMode]::Open)
	$memoryStream = New-Object IO.FileStream($Att,[System.IO.FileMode]::Open)
	
	
	$attachInfo = New-Object -TypeName Microsoft.SharePoint.Client.AttachmentCreationInformation
	$attachInfo.FileName = $Att
	$attachInfo.ContentStream = $memoryStream
	$attFile = $item.attachmentFiles.add($attachInfo)
	$ctx.load($attFile)
	$ctx.ExecuteQuery()
	
}
function writeAttachmentORG($item, $fileWithPath)
{
	$ctx=Get-PnPContext
	$memoryStream = New-Object IO.FileStream($fileWithPath,[System.IO.FileMode]::Open)
	$fileName = Split-Path $fileWithPath -Leaf
	$attachInfo = New-Object -TypeName Microsoft.SharePoint.Client.AttachmentCreationInformation
	$attachInfo.FileName = $fileName
	$attachInfo.ContentStream = $memoryStream
	$attFile = $item.attachmentFiles.add($attachInfo)
	$ctx.load($attFile)
	$ctx.ExecuteQuery()
}

Connect-PnPOnline -url https://lbforsikring.sharepoint.com/sites/Service -UseWebLogin

$Att=@("C:\Users\nicd\Desktop\webbestil\003.jpg")

writeItem -itemTitle "test6789"  -attachments $Att 


