import React, { useState } from 'react';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp hay không
        if (password !== confirmPassword) {
            alert('Mật khẩu và xác nhận mật khẩu không trùng khớp');
            return;
        }

        // Gửi thông tin đăng ký lên server
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, confirmPassword })
        });

        // Hiển thị thông báo từ server
        const message = await response.text();
        alert(message);
    };

    return (
        <form onSubmit={handleSubmit} action='signup' method='post'>
            <label>
                Tên người dùng:
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <br />
            <label>
                Mật khẩu:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <label>
                Xác nhận mật khẩu:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Đăng ký" />
        </form>
    );
}

export default SignupForm;