import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';
import * as moment from 'moment';

@Controller('api')
export class ApiController {
  @Get()
  async getInfo(
    @Query('slack_name') slackName: string,
    @Query('track') track: string,
  ) {
    const currentDay = moment().format('dddd');
    const utcTime = moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
    const githubFileUrl =
      'https://github.com/username/repo/blob/main/file_name.exthttps://github.com/Timadigwe/stage1_api/blob/master/src/api/api.controller.ts';
    const githubRepoUrl = 'https://github.com/Timadigwe/stage1_api';

    const response = {
      slack_name: slackName,
      current_day: currentDay,
      utc_time: utcTime,
      track: track,
      github_file_url: githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    };

    return response;
  }
}
