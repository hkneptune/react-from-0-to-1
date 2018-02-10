package jianqiang.com.youngheart.activity.others;

import android.app.Activity;
import android.content.Intent;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import jianqiang.com.youngheart.BuildConfig;
import jianqiang.com.youngheart.R;
import jianqiang.com.youngheart.activity.personcenter.PersonCenterActivity;
import jianqiang.com.youngheart.engine.AppConstants;
import jianqiang.com.youngheart.engine.ExampleRNInterface;
import jianqiang.com.youngheart.engine.ExampleReactPackage;
import jianqiang.com.youngheart.engine.GlobalVariables;
import jianqiang.com.youngheart.entity.CinemaBean;

public class ReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
	private ReactRootView mReactRootView;
	private ReactInstanceManager mReactInstanceManager;
	@Override
	protected void onCreate(@Nullable Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		mReactRootView = new ReactRootView(this);
		mReactInstanceManager = ReactInstanceManager.builder()
				.setApplication(getApplication()).setBundleAssetName("index.android.bundle")
				.setJSMainModuleName("index.android")
				.addPackage(new MainReactPackage()).addPackage(new ExampleReactPackage())
				.setUseDeveloperSupport(BuildConfig.DEBUG)
				.setInitialLifecycleState(LifecycleState.RESUMED).build();

		//ReactModule需要和index.android.js中的组件名称一致
		mReactRootView.startReactApplication(mReactInstanceManager, "RN7", null);

		LinearLayout linearLayout = new LinearLayout(this);
		linearLayout.setOrientation(LinearLayout.VERTICAL);
		Button button = new Button(this);
		button.setText("Android主动传值给Native");
		button.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				ExampleRNInterface.sendMessage("baobaojianqiang");
			}
		});

		linearLayout.addView(button);
		linearLayout.addView(mReactRootView);

		setContentView(linearLayout);
	}

	/*** JS不处理返回事件，会触发此方法     */
	@Override
	public void invokeDefaultOnBackPressed() {
		super.onBackPressed();
	}
	@Override
	public void onBackPressed() {
		if (mReactInstanceManager != null) {
			mReactInstanceManager.onBackPressed();
		} else {
			super.onBackPressed();
		}
	}

	@Override
	public boolean onKeyUp(int keyCode, KeyEvent event) {
		// 开发者菜单
		if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
			mReactInstanceManager.showDevOptionsDialog();
			return true;
		}
		return super.onKeyUp(keyCode, event);
	}
}