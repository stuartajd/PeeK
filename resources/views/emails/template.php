<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
        }

        @media screen and (max-width: 600px){
            .full-width{
                width: 100%!important;
                display: block!important;
            }
        }
    </style>
</head>
<body style="background-color: #f8f9fa;" bgcolor="#f8f9fa">
<table width="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center">
            <table width="600" cellspacing="0" cellpadding="0" class="full-width">
                <tr>
                    <td>
                        <table width="100%" style="background-color: #a91a1a;color:white;text-align: center;font-family: 'Arial';" bgcolor="a91a1a">
                            <tr>
                                <td align="center" style="color:white;">
                                    <span style="font-size: 20px;color: white;">PeeK</span>
									<br /><span style="color: white;">{{ $title }}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px;background-color: white;">
                        <p>{{ $message }}</p>
                    </td>
                </tr>
                <tr>
                    <td style="color: grey;text-align:center;padding-top: 20px;font-size:12px;">This email was sent to {{ $email }}.</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>