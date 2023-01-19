import { Controller } from '@nestjs/common';
import { GoogleSearchService } from './google-search.service';

@Controller('google-search')
export class GoogleSearchController {
  constructor(private readonly googleSearchService: GoogleSearchService) {}
}
