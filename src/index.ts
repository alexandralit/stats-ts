import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary1 = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// summary1.buildAndPrintReport(matchReader.matches);

// const summary2 = new Summary(new WinsAnalysis('Brighton'), new HtmlReport());
// summary2.buildAndPrintReport(matchReader.matches);

const summary = Summary.winsAnalysisWithHtmlReport('Brighton');