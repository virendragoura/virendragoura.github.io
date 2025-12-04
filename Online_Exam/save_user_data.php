<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = $data['password'];
$course = $data['course'];
$year = $data['year'];
$subject = $data['subject'];
$result = $data['result'];

$conn = new mysqli("127.0.0.1:3306", "u142852264_virendra", "@Exam_portal1234", "u142852264_exam_portal");

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "DB connection failed"]));
}

$sql = "INSERT INTO exam_results (username, password, course, year, subject, result)
        VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $username, $password, $course, $year, $subject, $result);
$stmt->execute();

echo json_encode(["status" => "success", "message" => "Saved"]);
$stmt->close();
$conn->close();
?>