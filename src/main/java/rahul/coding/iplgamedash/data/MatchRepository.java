package rahul.coding.iplgamedash.data;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import rahul.coding.iplgamedash.model.Match;

public interface MatchRepository extends CrudRepository<Match,Long>{

    List<Match> findByTeam1OrTeam2OrderByDateDesc(String teamName1,String teamName2,Pageable pageable);

    @Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :startDate and :endDate order by m.date desc")
    List<Match> getMatchesByYear( @Param("teamName") String teamName,@Param("startDate") LocalDate startDate,@Param("endDate") LocalDate endDate);

    List<Match> findByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(String teamName1,LocalDate startDate1,LocalDate endDate1,String teamName2,LocalDate startDate,LocalDate endDate);
    
    default List<Match> getLatestMatchesByTeamName(String teamName,int pageNum){
    return findByTeam1OrTeam2OrderByDateDesc(teamName,teamName,PageRequest.of(0, pageNum));
    }
}
