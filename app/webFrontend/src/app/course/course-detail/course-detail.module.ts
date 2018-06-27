import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseDetailComponent} from './course-detail.component';
import {CourseOverviewComponent} from './course-overview/course-overview.component';
import {FileViewComponent} from './file-view/file-view.component';
import {DownloadCourseDialogComponent} from './download-course-dialog/download-course-dialog.component';
import {CourseDetailRoutingModule} from './course-detail-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LectureModule} from '../../lecture/lecture.module';
import {FormsModule} from '@angular/forms';
import {CourseDetailDataResolve} from '../../shared/services/course-detail-data-resolve.service';
import {VideoViewComponent} from './video-view/video-view.component';
import {GridComponent} from './video-view/grid/grid.component';
import { DownloadTreeComponent } from './download-course-dialog/download-tree/download-tree.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CourseDetailRoutingModule,
    LectureModule,
    FormsModule,
  ],
  declarations: [
    CourseDetailComponent,
    CourseOverviewComponent,
    FileViewComponent,
    DownloadCourseDialogComponent,
    VideoViewComponent,
    GridComponent,
    DownloadTreeComponent,
  ],
  entryComponents: [
    DownloadCourseDialogComponent,
  ],
  exports: [
    CourseDetailComponent,
    DownloadCourseDialogComponent,
  ],
  providers: [
    CourseDetailDataResolve,
  ]
})
export class CourseDetailModule {
}
