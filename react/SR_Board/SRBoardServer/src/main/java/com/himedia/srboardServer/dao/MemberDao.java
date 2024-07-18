package com.himedia.srboardServer.dao;

import com.himedia.srboardServer.entity.Member;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class MemberDao {

    private final EntityManager em;
    public Member getMember(String userid) {
        //기본키로 레코드를 검색하여 결과를 리턴하는 메서드
        return em.find(Member.class, userid);
    }

    public void insertMember(Member member) {
        em.persist(member); //entity 를 이용한 레코드 추가

    }

    public Member updateMember(Member member) {
        //userid로 검색한 결과를 수정 : 이게 곧 테이블 레코드 수정
        Member mem = em.find(Member.class, member.getUserid());
        mem.setName(member.getName());
        mem.setEmail(member.getEmail());
        mem.setPhone(member.getPhone());
        mem.setPwd(member.getPwd());
        //수정 셜과를 리턴
        return mem;
    }
}
