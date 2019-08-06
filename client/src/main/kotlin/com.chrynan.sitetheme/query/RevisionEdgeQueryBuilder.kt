package com.chrynan.sitetheme.query

class RevisionEdgeQueryBuilder : EdgeQueryBuilder<RevisionQueryBuilder>() {

    override fun node(builder: RevisionQueryBuilder.() -> Unit) =
        gqlObject(name = "node", objectBuilder = RevisionQueryBuilder(), objectFieldBuilder = builder)
}