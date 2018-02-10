package jianqiang.com.youngheart.activity.movie;

import android.app.AlertDialog;
import android.os.Bundle;
import android.widget.TextView;

import com.alibaba.fastjson.JSON;

import jianqiang.com.youngheart.R;
import jianqiang.com.youngheart.base.AppBaseActivity;
import jianqiang.com.youngheart.engine.RequestAsyncTask;
import jianqiang.com.youngheart.entity.Movie;
import jianqiang.com.youngheart.entity.NetworkEntity;

public class MovieByFastJsonActivity extends AppBaseActivity {
	TextView tvMovieName;
	TextView tvMovieId;

	@Override
	protected void initVariables() {
	}

	@Override
	protected void initViews(Bundle savedInstanceState) {
		setContentView(R.layout.activity_movie);

		tvMovieName = (TextView) findViewById(R.id.tvMovieName);
		tvMovieId = (TextView) findViewById(R.id.tvMovieId);
	}

	@Override
	protected void loadData() {
		String url = "http://10.0.2.2:8888/movie/getmoviedetail?cityId=1";

		RequestAsyncTask task = new RequestAsyncTask() {

			@Override
			public void onSuccess(String content) {
				// 第2种写法，基于fastJSON
				NetworkEntity networkEntity = JSON.parseObject(content,
						NetworkEntity.class);
				String strResult = networkEntity.result;
				if (strResult != null) {
					Movie movie = JSON.parseObject(strResult, Movie.class);
					tvMovieName.setText(movie.movieName);
					tvMovieId.setText(String.valueOf(movie.movieId));
				}
			}

			@Override
			public void onFail(String errorMessage) {
				new AlertDialog.Builder(MovieByFastJsonActivity.this)
						.setTitle("出错啦").setMessage(errorMessage)
						.setPositiveButton("确定", null).show();
			}
		};
		task.execute(url);
	}
}
