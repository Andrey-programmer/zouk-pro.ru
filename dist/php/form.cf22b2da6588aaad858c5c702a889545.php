<?php

    function adopt($text) {
       return '=?UTF-8?B?'.Base64_encode($text).'?=';
    }
    
    $method = $_SERVER['REQUEST_METHOD'];

//Script Foreach

    $messageTelegram = "";

   
    if ( $method === 'POST' ) {
    
        $project_name = trim($_POST["project_name"]);
        $form_subject = trim($_POST["form_subject"]);
    
        $messageTelegram .= "<b>$form_subject</b>\r\n";
        
        foreach ( $_POST as $key => $value ) {
            if ( $value != "" && $key != "project_name" && $key != "form_subject" ) {
                
                if ( $key == "mobil"){
                    $messageTelegram .= "<b>$key</b>: <a href='tel:$value'>$value</a>\r\n";
                } else {
                    $messageTelegram .= "<b>$key</b>: $value\r\n";
                }           
            }
        }
    } else if ( $method === 'GET' ) {
    
        $project_name = trim($_GET["project_name"]);
        $form_subject = trim($_GET["form_subject"]);
        
        $messageTelegram .= "<b>$form_subject</b>\r\n";
        
        foreach ( $_GET as $key => $value ) {
            if ( $value != "" && $key != "project_name" && $key != "form_subject" ) {
                
                if ( $key == "mobil"){
                    $messageTelegram .= "<b>$key</b>: <a href='tel:$value'>$value</a>\r\n";
                } else {
                    $messageTelegram .= "<b>$key</b>: $value\r\n";
                }           
            }
        }
    }

// Отправляем почту
$headers = "Content-type: text/html; charset=utf-8\r\n";
@mail('pirisha@gmail.com, Lak0sta1302@gmail.com', $form_subject, nl2br($messageTelegram), $headers);

// Send Telegram

// мой новый бот @zoukprobot
    set_time_limit(0);
    $botToken = "665781365:AAEwbmxgVjDXw1PCvqjRU0rEm-26yDo3ciU";
    $website = "https://api.telegram.org/bot".$botToken;
    $chatId = "566221190";
//    file_get_contents($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML");
	file_get_contents("https://proxy.anonymster.com/browse.php?u=".urlencode($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML"));

// старый бот @zoukpro_bot Андрюхе
	set_time_limit(0);
    $botToken = "386780196:AAHTfHUbQSdJMyXYNJ7BF1jQoCNh7WRYM5U";
    $website = "https://api.telegram.org/bot".$botToken;
    $chatId = "246418899";
	file_get_contents("https://proxy.anonymster.com/browse.php?u=".urlencode($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML"));

// старый бот @zoukpro_bot мне
	set_time_limit(0);
    $botToken = "386780196:AAHTfHUbQSdJMyXYNJ7BF1jQoCNh7WRYM5U";
    $website = "https://api.telegram.org/bot".$botToken;
    $chatId = "566221190";
	file_get_contents("https://proxy.anonymster.com/browse.php?u=".urlencode($website."/sendmessage?chat_id=".$chatId."&text=".urlencode($messageTelegram)."&parse_mode=HTML"));

?>