package com.cazares.miguel.user_post;

/**
 * Created by Miguel Cazares on 1/20/18.
 */

public class UserPostActivity extends ReactNativeActivityBase {
    private static final String APP_NAME = "UserPost";

    @Override
    protected void finishOnCreate() {
        setAppName(APP_NAME);
        super.finishOnCreate();
    }
}
