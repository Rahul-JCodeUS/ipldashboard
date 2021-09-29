package rahul.coding.iplgamedash;

import java.time.LocalDate;



import org.springframework.batch.item.ItemProcessor;

import rahul.coding.iplgamedash.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {


  @Override
  public Match process(final MatchInput matchInput) throws Exception {
    final Match match = new Match();
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate()));
    match.setMatchWinner(matchInput.getWinner());
    match.setPlayerOfMatch(matchInput.getPlayer_of_match());
    match.setResult(matchInput.getResult());
    match.setResultMargin(matchInput.getResult_margin());
    final String firstInningsTeam,secondInningsTeam;
    
    if ("bat".equals(matchInput.getToss_decision())){
         firstInningsTeam = matchInput.getToss_winner();
         secondInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }else{
        secondInningsTeam = matchInput.getToss_winner();
        firstInningsTeam = matchInput.getToss_winner().equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }
    match.setTeam1(firstInningsTeam);
    match.setTeam2(secondInningsTeam);
    match.setTossDecision(matchInput.getToss_decision());
    match.setTossWinner(matchInput.getToss_winner());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());
    match.setVenue(matchInput.getVenue());


    return match;
  }

}