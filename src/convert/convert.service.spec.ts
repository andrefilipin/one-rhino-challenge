import { Test, TestingModule } from '@nestjs/testing';
import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertService],
    }).compile();

    service = module.get<ConvertService>(ConvertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    const options = {
      '': 0,
      'I': 1,
      'II': 2,
      'III': 3,
      'IV': 4,
      'V': 5,
      'VI': 6,
      'VII': 7,
      'VIII': 8,
      'IX': 9,
      'X': 10,
      'XV': 15,
      'XX': 20,
      'XL': 40,
      'L': 50,
      'LX': 60,
      'XC': 90,
      'C': 100,
      'D': 500,
      'M': 1000,
    }

    Object.keys(options).forEach((v)=>{
      expect(service.romainToArabic(v)).toEqual(options[v]);
    });
  });
});
