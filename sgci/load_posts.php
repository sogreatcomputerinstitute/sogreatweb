<?php
header('Content-Type: application/json');

// Check if the file exists and is readable
$file = 'posts.txt';
if (file_exists($file)) {
    // Read the file contents
    $posts = file_get_contents($file);
    
    // Split the posts into an array (one post per line)
    $postArray = explode("\n", trim($posts));
    
    // Decode JSON and store the posts in an array
    $postsDecoded = array_map(function($post) {
        return json_decode($post, true);  // Decode each post as an array
    }, $postArray);

    // Return the posts as a JSON response
    echo json_encode(['status' => 'success', 'posts' => $postsDecoded]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No posts found']);
}
?>
