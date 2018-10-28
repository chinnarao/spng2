import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
    constructor(private logger: NGXLogger, private toastrService: ToastrService) {
        this.logger.info('ArticleListComponent');
    }

    ngOnInit() {}

    createError() {
        // this.toastrService.error('Error logging failed!');
        throw new Error('error created by angular');
    }
}
