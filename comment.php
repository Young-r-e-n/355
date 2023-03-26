<?php
include "index.php";
include "dbconnect.php";



if (empty($_POST['comment'])) {
    // Blank comment, reject
    die('Comment cannot be blank');
    }
    
    $existing = $db->query('SELECT * FROM comments WHERE comment = ?', $_POST['comment']);
    if ($existing->count()) {
    // Duplicate comment found, reject
    die('Comment already exists');
    }
    
    // Comment is valid, insert
    $db->insert('comments', [
    'comment' => $_POST['comment'],
    'created_at' => date('Y-m-d H:i:s')
    ]);
?>