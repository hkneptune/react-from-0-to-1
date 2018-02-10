package jianqiang.com.youngheart.activity.others;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.widget.Button;

import jianqiang.com.youngheart.R;
import jianqiang.com.youngheart.activity.movie.MovieByFastJsonActivity;
import jianqiang.com.youngheart.activity.movie.MovieByJsonObjectActivity;
import jianqiang.com.youngheart.activity.personcenter.ListDemoActivity;
import jianqiang.com.youngheart.engine.AppConstants;
import jianqiang.com.youngheart.engine.GlobalVariables;
import jianqiang.com.youngheart.entity.CinemaBean;

public class MainActivity extends Activity {
	private Button btnReact;

	private Button btnLogin;
	private Button btnLoginNew;

	private Button btnByJsonObject;
	private Button btnByFastJson;

	private Button btnListDemo;

	private Button btnTestNullValue;

	void dosomething() {

	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_main);


		btnReact = (Button) findViewById(R.id.btnReact);
		btnReact.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						ReactActivity.class);
				startActivity(intent);
			}
		});

		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
			// 判断是否有SYSTEM_ALERT_WINDOW权限
			if(!Settings.canDrawOverlays(this)) {
				// 申请SYSTEM_ALERT_WINDOW权限
				Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
						Uri.parse("package:" + getPackageName()));
				// REQUEST_CODE2是本次申请的请求码
				startActivityForResult(intent, 1000);
			} else {
				dosomething();
			}
		} else {
			dosomething();
		}



		btnLogin = (Button) findViewById(R.id.btnLogin);
		btnLogin.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						LoginActivity.class);
				intent.putExtra(AppConstants.Email, "jianqiang.bao@qq.com");

				CinemaBean cinema = new CinemaBean();
				cinema.setCinemaId("1");
				cinema.setCinemaName("星美");

				//使用全局变量的方式传递参数
				GlobalVariables.Cinema = cinema;

				startActivity(intent);
			}
		});

		btnLoginNew = (Button) findViewById(R.id.btnLoginNew);
		btnLoginNew.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						LoginNewActivity.class);
				intent.putExtra(AppConstants.Email, "jianqiang.bao@qq.com");

				CinemaBean cinema = new CinemaBean();
				cinema.setCinemaId("1");
				cinema.setCinemaName("星美");

				//使用intent上挂可序列化实体的方式传递参数
				intent.putExtra(AppConstants.Cinema, cinema);

				startActivity(intent);
			}
		});

		btnByJsonObject = (Button) findViewById(R.id.btnByJsonObject);
		btnByJsonObject.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						MovieByJsonObjectActivity.class);
				startActivity(intent);
			}
		});

		btnByFastJson = (Button) findViewById(R.id.btnByFastJson);
		btnByFastJson.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						MovieByFastJsonActivity.class);
				startActivity(intent);
			}
		});


		btnListDemo = (Button) findViewById(R.id.btnListDemo);
		btnListDemo.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						ListDemoActivity.class);
				startActivity(intent);
			}
		});

		btnTestNullValue = (Button) findViewById(R.id.btnTestNullValue);
		btnTestNullValue.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				Intent intent = new Intent(MainActivity.this,
						TestNullValueActivity.class);
				startActivity(intent);
			}
		});
	}
}
