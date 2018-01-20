package com.cazares.miguel.user_post;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        startUserPostActivity();
    }

    private void startUserPostActivity() {
        Intent intent = new Intent(MainActivity.this, UserPostActivity.class);
        startActivity(intent);
    }
}
