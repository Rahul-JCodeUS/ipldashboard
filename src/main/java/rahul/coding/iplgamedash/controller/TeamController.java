package rahul.coding.iplgamedash.controller;


import java.time.LocalDate;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rahul.coding.iplgamedash.data.MatchRepository;
import rahul.coding.iplgamedash.data.TeamRepository;
import rahul.coding.iplgamedash.model.Match;
import rahul.coding.iplgamedash.model.Team;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamrepo;
    
    private MatchRepository matchRepository;

    public TeamController (TeamRepository repo,MatchRepository matchRepository){
        this.teamrepo = repo;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}/{pageNum}")
    public Team getTeamInfo(@PathVariable String teamName,@PathVariable int pageNum) {
        Team team = new Team();
        team = this.teamrepo.findByTeamName(teamName);
        team.setMatches(this.matchRepository.getLatestMatchesByTeamName(teamName, pageNum));
        return team;
    }

    @GetMapping("/teams")
    public Iterable<Team> getTeams() {
        return this.teamrepo.findAll();  
    }

    @GetMapping("/team/{teamName}/matches")
    public Iterable<Match> getMatches(@PathVariable String teamName,@RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year+1, 1, 1);
       return this.matchRepository.getMatchesByYear(teamName,startDate,endDate);  
    }

    @GetMapping("/print")
    public String sample() {
        return "Hello";
        }
}
