package com.cazares.miguel.user_post;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    protected ReactRootView mReactRootView;
    protected ReactInstanceManager mReactInstanceManager;
    private static final int OVERLAY_PERMISSION_REQ_CODE = 6;

    protected Bundle mBundle = new Bundle();

    private static String BUNDLE_SUFFIX = ".jsbundle";
    private static final String SEPARATOR = "/";
    private static boolean DEBUG = true;

    protected String mReactNativeAppName = "";
    protected String mBundleAssetName = "";
    protected String mMainModuleName = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        hideActionBar();

        if (DEBUG) {
            BUNDLE_SUFFIX = ".bundle";
        }

        checkPermissions();
    }

    protected void hideActionBar() {
        getSupportActionBar().hide();
    }

    protected void setAppName(String appName) {
        mReactNativeAppName = appName;

        String dashCaseAppName = "user-post";
        String prefix = dashCaseAppName;
        if (DEBUG) {
            prefix = dashCaseAppName + SEPARATOR + dashCaseAppName;
        }
        mBundleAssetName = prefix + BUNDLE_SUFFIX;
        mMainModuleName = prefix;
    }

    protected void finishOnCreate() {
        mReactRootView = new ReactRootView(this);
        mReactRootView.setBackgroundColor(getResources().getColor(R.color.default_background));
        setAppName("UserPost");

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName(mBundleAssetName)
                .setJSMainModulePath(mMainModuleName)
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, mReactNativeAppName, mBundle);
        setContentView(mReactRootView);
    }

    @SuppressLint("NewApi")
    private void checkPermissions() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            finishOnCreate();
            return;
        }
        if (Settings.canDrawOverlays(this)) {
            finishOnCreate();
            return;
        }
        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                Uri.parse("package:" + getPackageName()));
        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
    }

    @SuppressLint("NewApi")
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode != OVERLAY_PERMISSION_REQ_CODE) {
            finishOnCreate();
            return;
        }
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            finishOnCreate();
            return;
        }
        if (Settings.canDrawOverlays(this)) {
            finishOnCreate();
            return;
        }
        // SYSTEM_ALERT_WINDOW permission not granted...
        Log.d("MainActivity", "SYSTEM_ALERT_WINDOW permission not granted...");
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, new DefaultHardwareBackBtnHandler() {
                @Override
                public void invokeDefaultOnBackPressed() {

                }
            });
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
